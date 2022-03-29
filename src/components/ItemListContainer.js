import React from "react";

import ItemCount from "./ItemCount";
import { ItemList } from "./ItemList";



const ItemListContainer = ({ saludo }) => {

  const productoInicial = {
    id: 1,
    
  }


  const onAdd = (count) => {
    alert(`Agregaste ${count} items al carrito`);
  };
  return (
    <div className="ilc">
      <p className="saludo">{saludo}</p>
      <ItemList />
      <ItemCount stock={10} initial={1} onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;
