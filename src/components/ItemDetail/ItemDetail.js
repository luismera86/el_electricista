
import './ItemDetail.scss'

export const ItemDetail = ({producto}) => {

    const { nombre, precio, img, descripcion, categoria, stock } = producto
  return (
    <div className="detailConteiner">
        <div className="product">
            <img src={img} />
            <div>
                <h4>Categoría/ {categoria}</h4>
                <h2>{nombre}</h2>
                <p>Precio {precio}</p>
            </div>
            <section>
                <h2>Fecha de envío 10 de Abril</h2>
                <p>Costo de envio $899</p>
                <p>Stock disponible {stock}</p>
                <button type="button">Comprar ahora</button>       
            </section>
        </div>
        <div className='descriptionItem'>
            <p>{descripcion}</p>
        </div>
    </div>
  )
}
