import React, { useContext, useEffect, useState } from 'react'
import { myContext } from '../../context/CartContext'
import styled from './CartItem.module.css'

const CartItem = ({ product, qty }) => {
	const { removeItem, quantityModify, subTotalPrice } = useContext(myContext)
	const { title, price, pictureUrl, stock, id } = product
	const [count, setCount] = useState(qty)
	const [subTotal, setSubTotal] = useState(0)

	useEffect(() => {
		setSubTotal(price * count)
	}, [count])

	useEffect(() => {
		subTotalPrice(id, subTotal)
	}, [subTotal])

	useEffect(() => {
		quantityModify(id, count)
	}, [count])

	const btnSum = () => (count < stock ? setCount(count + 1) : setCount(stock))
	const btnRes = () => (count >= 1 ? setCount(count - 1) : setCount(0))
	const handledDelete = () => removeItem(id)

	return (
		<div className=' container d-flex flex-column align-items-center mt-3 flex-md-row align-items-md-center justify-content-between '>
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
