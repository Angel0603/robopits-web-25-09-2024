import {instance} from './axios.js'

export const registerRequest = user => instance.post(`/register`, user);
export const loginRequest = user => instance.post(`/login`, user);
export const verificarToken = () => instance.get(`/verify`)
export const forgotPasswordRequest = email => instance.post(`/forgotPassword`, { Email: email });
export const resetPasswordRequest = (token, Password) => instance.post(`/passwordReset`, { token, Password });
//_____________APIS REALES DEL PROYECTO XD________//
export const crearEmpleado = user => instance.post(`/registro`, user);
export const IniciarEmpleado = user => instance.post(`/inicio`, user);
export const verificarTokenEmpleado = () => instance.get('/verificar')

export const crearCategoria = Categoria => instance.post(`/Categorias`, Categoria);
export const getAllCategorias = categoria => instance.get(`/Categorias`, categoria);
export const getCategoria = categoriaId => instance.get(`/Categoria/${categoriaId}`);
export const eliminarCategoria = categoriaId => instance.delete(`/Categoria/${categoriaId}`);
export const updateCategoria = (categoriaId, categoriaData) => instance.put(`/Categoria/${categoriaId}`, categoriaData);

export const getAllProductos = Productos => instance.get(`/Productos`, Productos);
export const crearProducto = Producto => instance.post(`/Productos`, Producto);
export const getProducto = ProductoId => instance.get(`/Producto/${ProductoId}`);
export const EliminarProducto = (ProductoId) => {return instance.delete(`/Producto/${ProductoId}`);};
export const updateProducto = (ProductoId, productoData) => instance.put(`/Producto/${ProductoId}`, productoData);

export const agregarAlCarrito = (userId, productId, quantity) => instance.post(`/carritoagregar`, { userId, productId, quantity });
export const obtenerCarrito = (userId) =>  instance.get(`/carrito/${userId}`);

export const agregarPedido = (userId, direccion, descuento) => instance.post(`/crearpedido`, { userId, direccion, descuento });

// Ruta para obtener los pedidos del cliente
export const obtenerPedidosCliente = (userId) => instance.get(`/pedidosCliente/${userId}`);

// Ruta para obtener todos los pedidos (administrador)
export const obtenerTodosLosPedidos = () => instance.get(`/todosLosPedidos`);