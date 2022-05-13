import styled from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { myContext } from '../../context/CartContext'

const ItemDetail = ({ producto }) => {
	const { addItem } = useContext(myContext)
	const [intemsCart, setIntemsCart] = useState(0)
	const { title, description, price, pictureUrl, stock } = producto

	const onAdd = count => {
		setIntemsCart(count)
		addItem(producto, count)
	}

	return (
		<>
			<div className=' container-fluid border border-2 border-dark mt-3 d-flex justify-content-between flex-sm-column flex-xl-row flex-column'>
				<div className=' container border border-dark w-50 m-4 d-flex'>
					<img className=' img-fluid' src={pictureUrl} />
				</div>
				<div className='container m-4'>
					<h4 className={styled.productCategorie}>Categoría/ </h4>
					<h2 className={styled.nameProduct}>{title}</h2>
					<p className={styled.priceProduct}>Precio $ {price}</p>
				</div>
				<section className='container d-flex flex-column w-50 m-4 justify-content-center align-items-center'>
					<h2 className={styled.shippingDate}>Fecha de envío 10 de Abril</h2>
					<p className={styled.shippingCost}>Costo de envio $899</p>
					<p className={styled.availableStock}>
						Stock disponible {stock - intemsCart}
					</p>

					<ItemCount producto={producto} onAdd={onAdd} />

					<p className={styled.intemsCart}>Items en carrito {intemsCart}</p>
				</section>
			</div>
			<div className=' container mt-3'>
				<h3>Descripción del producto</h3>
				<p className={styled.descriptionProduct}>{description}</p>
			</div>
		</>
	)
}

export default ItemDetail
