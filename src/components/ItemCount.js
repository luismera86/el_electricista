import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const btnSum = () => {
    setCount(count + 1);
  };
  const btnRes = () => {
    if (count >= 1) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };

  const addCart = () => {
    if (count <= stock) {
      onAdd(count);
    } else {
      alert(`Supera el stock disponible solo quedan ${stock} unidades`);
    }
  };

  return (
    <div className="counter">
      <div className="counterBox">
        <FiPlus onClick={btnSum} className="btnSum" />
        <p className="countResult">{count}</p>
        <FiMinus onClick={btnRes} className="btnRes" />
      </div>
      <button onClick={addCart} className="btnAddCart">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;

// Cuando agrege al carrito hay que descontar stock
