import React, { useState } from 'react';

const Cart = () => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div>
      <h2>Meu Carrinho</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - R$ {item.price}
          </li>
        ))}
      </ul>
      <button onClick={() => addItem({ name: 'Item Novo', price: 10 })}>
        Adicionar Item
      </button>
    </div>
  );
};

export default Cart;