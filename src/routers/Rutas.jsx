import { createBrowserRouter } from "react-router-dom";
/*CLIENTE*/
import ProtectedRoutes from "../ProtectedRoutes.jsx";
import ProtectorRutasPrivadas from "../ViewsAdmin/ProtectorRutasPrivadas.jsx";
import ArduinoMCU from '../views/ArduinoMCU';
import Bienvenida from '../views/Bienvenida';
import Inicio from '../views/Inicio';
import Login from '../views/Login';
import Microcontroladores from '../views/Microcontroladores';
import Modulos from '../views/Modulos';
import Motores from '../views/Motores';
import Botones from '../views/Botones';
import Potenciometros from '../views/Potenciometros';
import Protoboard from '../views/Protoboard';
import Registro from '../views/Registro';
import RestablecerContrasena from '../views/RestablecerContrasena';
import Sensores from '../views/Sensores';
import Soldadura from '../views/Soldadura';
import Error404 from '../views/Error404';
import PreguntasFrecuentes from "../views/PreguntasFrecuentes";
import QuienesSomos from "../views/QuienesSomos";
import TerminosCondiciones from "../views/TerminosCondiciones";
import AvisosPrivacidad from "../views/AvisosPrivacidad";
import PasswordReset from "../views/PasswordReset";
import Carrito from "../views/Carrito.jsx";

/*PRODUCTOS CLIENTE*/
import Productos from '../views/Productos';
import Categorias from "../views/Categorias.jsx";
import ResenaProducto from "../views/ResenaProducto.jsx";

/*ADMINISTRADOR*/
import IniciarSesion from "../ViewsAdmin/IniciarSesion";
import AdminProductos from "../ViewsAdmin/AdminProductos";
import AdminCategorias from "../ViewsAdmin/AdminCategorias";
export const Rutas = createBrowserRouter([
    {
        path: "/Inicio",
        element: <Inicio/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/registro",
        element: <Registro/>
    },
    {
        path: "/restablecerContrasena",
        element: <RestablecerContrasena/>
    },
    {
        path:"/PasswordReset",
        element: <PasswordReset/>
    },

    /* Rutas del Nav */
    {
        path: "/sensores",
        element: <Sensores/>
    },
    {
        path: "/modulos",
        element: <Modulos/>
    },
    {
        path: "/arduino",
        element: <ArduinoMCU/>
    },
    {
        path: "/soldadura",
        element: <Soldadura/>
    },
    {
        path: "/protoboard",
        element: <Protoboard/>
    },
    {
        path: "/microcontroladores",
        element: <Microcontroladores/>
    },
    { 
        path: "/motores",
        element: <Motores/>
    },
    {
        path: "/botones",
        element: <Botones/>
    },
    {
        path: "/potenciometros",
        element: <Potenciometros/>
    },
    {
        path: "/categorias",
        element: <Categorias/>
    },
    {
        path: "/todos-los-productos",
        element:  <Productos/>
                        
    },
    {
        path: "/resena-producto/:id",
        element:  <ResenaProducto/>
                        
    },
    {
        path: "/resena-producto",
        element:  <Productos/>
                        
    },
    {
        path: "/preguntas-frecuentes",
        element: <PreguntasFrecuentes/>
    },
    {
        path: "/quienes-somos",
        element: <QuienesSomos/>
    },
    {
        path: "/terminos-y-condiciones",
        element: <TerminosCondiciones/>
    },
    {
        path: "/avisos-de-privacidad",
        element: <AvisosPrivacidad/>
    },
    {
        path: "/carrito",
        element: <Carrito/>,
        errorElement: <Error404/>,
    },
    {
        path: "/",
        element: <Bienvenida/>,
        errorElement: <Error404/>,
    },
    ///////////////Rutas del Admin//////////////////////
    {
        path: "/login-admin",
        element: <IniciarSesion/>,
    },
    {
        path:"/admin-productos",
        element: <ProtectorRutasPrivadas Page={AdminProductos}/>,
    },
    {
        path:"/admin-categorias",
        element: <ProtectorRutasPrivadas Page={AdminCategorias}/>
                        
    }
]);


export default Rutas

