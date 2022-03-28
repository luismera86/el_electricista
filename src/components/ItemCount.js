import React, { useState } from "react";


const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const btnSum = () => setCount(count + 1);
  const btnRes = () => count >= 1 ? setCount(count - 1) : setCount(0);
  const addCart = () => count <= stock ? onAdd(count) : alert(`Supera el stock disponible solo quedan ${stock} unidades`);
  
  return (
    <div className="counter">
      <div className="counterBox">
        <button className="btnSum" onClick={btnSum}>+</button>
        <p className="countResult">{count}</p>
        <button className="btnRes" onClick={btnRes}>-</button>
      </div>
      <button onClick={addCart} className="btnAddCart">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;

