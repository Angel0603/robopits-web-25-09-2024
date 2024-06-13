import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verificarToken, IniciarEmpleado, verificarTokenEmpleado, crearEmpleado } from "../api/auth.js"
import Cookies from "js-cookie";

export const AuthContext = createContext(null)

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth debe usarse dentro de un AuthProvider");
    }
    return context;
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    const [empleado, setEmpleado] = useState(null);
    const [isEmpleadoAuthenticated, setIsEmpleadoAuthenticated] = useState(false);
    const [empleadoErrors, setEmpleadoErrors] = useState([]);
    const [empleadoLoading, setEmpleadoLoading] = useState(true);

    const signup = async (user) => {
        try {
            const res = await registerRequest(user);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            console.log(error.response.data);
            setErrors(error.response.data);
        }
    };

    const signupEmpleado = async (empleadoData) => {
        try {
            const res = await crearEmpleado(empleadoData);
            console.log(res.data);
            setEmpleado(res.data);
            setIsEmpleadoAuthenticated(true);
        } catch (error) {
            console.log(error.response.data);
            setEmpleadoErrors(error.response.data);
        }
    };

    const signin = async (userData) => {
        try {
            const res = await loginRequest(userData);
            setIsAuthenticated(true);
            setUser(res.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setErrors([...errors, error.response.data.message]);
            setLoading(false);
        }
    };
    const signinEmpleado = async (empleadoData) => {
        try {
            const res = await IniciarEmpleado(empleadoData);
            console.log(res);
            setIsEmpleadoAuthenticated(true);
            setEmpleado(res.data);
        } catch (error) {
            if (Array.isArray(error.response.data)) {
                return setEmpleadoErrors(error.response.data);
            }
            setEmpleadoErrors([error.response.data.message]);
        }
    };


    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
        // No need to explicitly remove cookies here; let the backend handle it on API call
    };

    const logoutEmpleado = () => {
        Cookies.remove("admin");
        setIsEmpleadoAuthenticated(false);
        setEmpleado(null);
    };

    useEffect(() =>{
        if(errors.length > 0){
            const timer = setTimeout(() =>{
                setErrors([])
            },5000)
            return () => clearTimeout(timer)
        }
    },[errors])

    useEffect(() => {
        if (empleadoErrors.length > 0) {
            const timer = setTimeout(() => {
                setEmpleadoErrors([]);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [empleadoErrors]);


    // Verifica el estado de la sesión al cargar la aplicación
    useEffect(() => {
        async function checkLogin() {
            try {
                const res = await verificarToken();
                if (res.data) {
                    setIsAuthenticated(true);
                    setUser(res.data);
                } else {
                    throw new Error('Session validation failed');
                }
            } catch (error) {
                console.log(error);
                setIsAuthenticated(false);
                setUser(null);
            } finally {
                setLoading(false);
            }
        }
        checkLogin();
    }, []);
    


    useEffect(() => {
        async function checkLoginEmpleado() {
            const cookies = Cookies.get();
            if (!cookies.admin) {
                setIsEmpleadoAuthenticated(false);
                setEmpleadoLoading(false);
                return setEmpleado(null);
            }

            try {
                const res = await verificarTokenEmpleado(cookies.admin);
                if (!res.data) {
                    setIsEmpleadoAuthenticated(false)
                    setEmpleadoLoading(false)
                    return;
                }
                setIsEmpleadoAuthenticated(true);
                setEmpleado(res.data);
                setEmpleadoLoading(false);
            } catch (error) {
                console.log(error);
                setIsEmpleadoAuthenticated(false);
                setEmpleado(null);
                setEmpleadoLoading(false);
            }
        }

        checkLoginEmpleado();
    }, []);
    return (
        <AuthContext.Provider
            value={{
                signup,
                signin,
                loading,
                logout,
                user,
                isAuthenticated,
                errors,
                
                signupEmpleado,
                signinEmpleado,
                logoutEmpleado,
                empleado,
                isEmpleadoAuthenticated,
                empleadoErrors,
                empleadoLoading,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}