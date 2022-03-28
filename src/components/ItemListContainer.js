import React from "react";
import styledComponents from "styled-components";

import ItemCount from "./ItemCount";



const ItemListContainer = ({ saludo }) => {
  const onAdd = (count) => {
    alert(`Agregaste ${count} items al carrito`);
  };
  return (
    <div className="ilc">
      <p className="saludo">{saludo}</p>
      <ItemCount stock={10} initial={1} onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;
