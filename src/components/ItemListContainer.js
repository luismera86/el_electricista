import React, { useEffect, useState } from "react";

//import ItemCount from "./ItemCount";
import { ItemList } from "./ItemList";


const productosIniciales = [
  {
    id: 1, 
    title: 'Térmica 2X10', 
    description: 'Interruptor termomágnetico', 
    price: 1600, 
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_857137-MLA40604581692_012020-F.webp'
  },
  {
    id: 2, 
    title: 'Térmica 2X16', 
    description: 'Interruptor termomágnetico', 
    price: 1600, 
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_857137-MLA40604581692_012020-F.webp'
  },
  {
    id: 3, 
    title: 'Térmica 2X20', 
    description: 'Interruptor termomágnetico', 
    price: 1650, 
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_857137-MLA40604581692_012020-F.webp'
  },
  {
    id: 4, 
    title: 'Térmica 2X25', 
    description: 'Interruptor termomágnetico', 
    price: 1700, 
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_857137-MLA40604581692_012020-F.webp'
  },
  
]

const promesa = new Promise((res) => {
  setTimeout(() => {
    res(productosIniciales)
  }, 2000)
}) 




const ItemListContainer = ({ saludo }) => {

  const [productos, setProductos] = useState([])

  useEffect(() => {
    promesa.then(productos => setProductos(productos) )
    
  }, [])



  
  //const onAdd = (count) => {
    //alert(`Agregaste ${count} items al carrito`);
 // };
  return (
    <div className="ilc">
      <p className="saludo">{saludo}</p>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
