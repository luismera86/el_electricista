import React, { useState } from "react";


const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const btnSum = () => count < stock ? setCount(count + 1) : setCount(stock);
  const btnRes = () => count >= 1 ? setCount(count - 1) : setCount(0);
  const addCart = () => count <= stock && onAdd(count);
  
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

