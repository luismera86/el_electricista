
export const Item = ({productos, setProductos}) => {
    
    
    const producto = {
        id: 55, 
        title: 'Interruptor Termomágnetico 10A', 
        description: 'Interruptor Termomágnetico 10A', 
        price: 1800, 
        //Insertar la Imagen del producto
    }

    setProductos([...productos, producto])


  return (

    <div>
        {/* Mostrar los detalles del producto  */}
    </div> 
  )
}
