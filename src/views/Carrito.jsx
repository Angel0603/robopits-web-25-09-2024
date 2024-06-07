import React, { useState, useEffect } from 'react';
import { obtenerCarrito } from '../api/auth.js';
import { useAuth } from '../context/AuthContext.jsx';

const Carrito = () => {
  const { user } = useAuth();
  const [carrito, setCarrito] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarrito = async () => {
      try {
        setLoading(true);
        const response = await obtenerCarrito(user.id);
        setCarrito(response.data.carrito);
        setLoading(false);
      } catch (error) {
        setError('Error al obtener el carrito');
        setLoading(false);
      }
    };

    if (user && user.id) {
      fetchCarrito();
    }
  }, [user]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {carrito ? (
        <div>
          <ul>
            {carrito.items.map(item => (
              <li key={item.productId._id}>
                <p>Producto: {item.productId.NameProducto}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: ${item.price}</p>
              </li>
            ))}
          </ul>
          <p>El total de tu carrito es: ${carrito.totalPrice}</p> {/* Mostrar el total del carrito aquí */}
        </div>
      ) : (
        <p>No hay productos en el carrito</p>
      )}
    </div>
  );
};

export default Carrito;
