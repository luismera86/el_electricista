import { useEffect, useState } from "react"
import { ItemDetail } from "./ItemDetail"

  
const productoInicial = {
  id: 1,
  nombre: 'Interruptor Diferencial 2x40Amp',
  precio: '$3.500',
  img: 'https://http2.mlstatic.com/D_NQ_NP_776157-MLA41492122197_042020-O.webp',
  descripcion: 'El interruptor diferencial de Easy9 (Clase AC) asegura la proteccion de personas contra descargas electricas por contacto directo (30 mA). Actuan al detectar un defecto de aislamiento entre conductores activos y tierra, igual o superior a 30mA. Es independiente de la tension: la tecnologia electromecanica asegura una proteccion contra corrientes residuales incluso con 0 V.',
  categoria: 'Diferenciales',
}

const promesa = new Promise((res) => {
  setTimeout(() => {
    res(productoInicial)
    
  }, 2000)

}) 

export const ItemDetailContainer = () => {

  
  const [producto, setProducto] = useState([])
  
  const getItem = () => promesa
    .then(producto => 
    setProducto(producto))
  /* useEffect(() => {
    promesa.then(producto => 
      setProducto(producto))}, []) */

  getItem()


  return (
    <>
      <ItemDetail producto={producto} />
    </>
  )
}
