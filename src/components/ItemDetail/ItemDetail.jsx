import styled from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../../context/CartContext'

const ItemDetail = ({ producto }) => {
	const { addItem } = useContext(myContext)
	const [state, setState] = useState(true)
	const [intemsCart, setIntemsCart] = useState(0)
	const { title, description, price, pictureUrl, stock } = producto

	const onAdd = (stateCount, count) => {
		setState(stateCount)
		setIntemsCart(count)
		addItem(producto, count)
	}

	return (
		<div className={styled.detailConteiner}>
			<div className={styled.product}>
				<div className={styled.imgBox}>
					<img className={styled.imgProduct} src={pictureUrl} />
				</div>
				<div className={styled.productBox}>
					<h4 className={styled.productCategorie}>Categoría/ </h4>
					<h2 className={styled.nameProduct}>{title}</h2>
					<p className={styled.priceProduct}>Precio $ {price}</p>
				</div>
				<section className={styled.buysBox}>
					<h2 className={styled.shippingDate}>Fecha de envío 10 de Abril</h2>
					<p className={styled.shippingCost}>Costo de envio $899</p>
					<p className={styled.availableStock}>
						Stock disponible {stock - intemsCart}
					</p>

					{state && <ItemCount producto={producto} onAdd={onAdd} />}
					{state === false && (
						<p className={styled.intemsCart}>Items en carrito {intemsCart}</p>
					)}

					<Link className={styled.buysButton} type='button' to='/cart'>
						Comprar ahora
					</Link>
				</section>
			</div>
			<div className={styled.descriptionBox}>
				<p className={styled.descriptionProduct}>{description}</p>
			</div>
		</div>
	)
}

export default ItemDetail
