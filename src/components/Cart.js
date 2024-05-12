import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h2>Carrito de Compra</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.name} />
            <div>
              <p>{item.name}</p>
              <p>Precio: ${item.price}</p>
              <p>Cantidad: {item.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
