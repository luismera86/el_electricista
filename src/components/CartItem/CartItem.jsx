import React, { useContext, useState } from 'react'
import { myContext } from '../CartContext/CartContext'
import styled from './CartItem.module.css'

const CartItem = ({ product, qty }) => {
  const {removeItem} = useContext(myContext)
	const { title, price, pictureUrl, stock, id } = product
	const [count, setCount] = useState(qty)

	const btnSum = () => (count < stock ? setCount(count + 1) : setCount(stock))
	const btnRes = () => (count >= 1 ? setCount(count - 1) : setCount(0))
  const handledDelete = () => removeItem(id)

	return (
	
			<div className={styled.cartItemBox}>
				<img className={styled.itemImg} src={pictureUrl} alt='porduct' />
				<h2 className={styled.itemTitle}>Producto: {title}</h2>
				<h2 className={styled.itemPrice}>Precio: ${price * count}</h2>

				<button className={styled.btnSum} onClick={btnSum}>
					+
				</button>
				<p className={styled.countResult}>{count}</p>
				<button className={styled.btnRes} onClick={btnRes}>
					-
				</button>

				<button onClick={handledDelete} type='button' className={styled.deleteButton}>Eliminar</button>
			</div>
		
	)
}

export default CartItem
