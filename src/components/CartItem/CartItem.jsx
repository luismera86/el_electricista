import React, { useContext, useEffect, useState } from 'react'
import { myContext } from '../../context/CartContext'
import styled from './CartItem.module.css'

const CartItem = ({ product, qty, itemsStock}) => {
	const { removeItem, quantityModify, subTotalPrice } = useContext(myContext)
	const { title, price, pictureUrl, stock, id } = product
	const [count, setCount] = useState(qty)
	const [subTotal, setSubTotal] = useState(0)

	// Calcula el subtotal de cada producto
	useEffect(() => {
		setSubTotal(price * count)
	}, [count])

	// Envia el subtotal de cada producto al context para que se agregue el subtotal al producto
	useEffect(() => {
		subTotalPrice(id, subTotal)
	}, [subTotal])

	// Envia la cantidad de productos al context para que se actualice el carrito
	useEffect(() => {
		quantityModify(id, count)
		itemsStock(count, id)
	}, [count])

	const btnSum = () => (count < stock ? setCount(count + 1) : setCount(stock))
	const btnRes = () => (count >= 1 ? setCount(count - 1) : setCount(0))
	const handledDelete = () => removeItem(id)

	return (
		<div className={styled.cartItemBox}>
			<img className={styled.itemImg} src={pictureUrl} alt='porduct' />
			<h2 className={styled.itemTitle}>Producto: {title}</h2>
			<h2 className={styled.itemPrice}>Precio: ${subTotal}</h2>

			<button className={styled.btnSum} onClick={btnSum}>
				+
			</button>
			<p className={styled.countResult}>{count}</p>
			<button className={styled.btnRes} onClick={btnRes}>
				-
			</button>

			<button
				onClick={handledDelete}
				type='button'
				className={styled.deleteButton}
			>
				Eliminar
			</button>
		</div>
	)
}

export default CartItem
