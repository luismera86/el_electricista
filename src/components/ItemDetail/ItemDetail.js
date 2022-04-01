

export const ItemDetail = ({producto}) => {

    const { nombre, precio, img, descripcion, categoria, stock } = producto
  return (
    <div className="">
        <div className="">
            <img className=" " src={img} />
            <div>
                <h4 className="">Categoría/ {categoria}</h4>
                <h2 className="">{nombre}</h2>
                <p className=" ">Precio {precio}</p>
            </div>
            <section>
                <h2 className="">Fecha de envío 10 de Abril</h2>
                <p className="">Costo de envio $899</p>
                <p className="">Stock disponible {stock}</p>
                <button type="button" className=" ">Comprar ahora</button>       
            </section>
        </div>
        <div className="">
            <p className="">{descripcion}</p>
        </div>
    </div>
  )
}
