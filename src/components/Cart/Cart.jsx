import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import styled from './Cart.module.css'
import { addDoc, collection, serverTimestamp, updateDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase/firebase'

const Cart = () => {
	const { cart, clearCart, totalPrice } = useContext(myContext)
	const [idVenta, setIdVenta] = useState('')

	const itemsStock = (items) => {
		const newStock = items
		
	}
	useEffect(() => {
	
		const updateCollection = doc(db, 'productos', 'id')
		updateDoc(updateCollection, {stock: newStock})



}, [])




	/* useEffect(() => {
		const checkout = () => {
			const ventaCollection = collection(db, 'ventas')
			addDoc(ventaCollection, {
				user,
				items: cart,
				date: serverTimestamp(),
				total: totalPrice,
				id: idVenta,
			}).then(resutl => {
				setIdVenta(resutl.id)
			})
		}
		checkout()
	}, []) */

	return (
		<div className={styled.containerCart}>
			<div className={styled.cart}>
				{cart.map(cart => (
					<CartItem
						key={cart.product.id}
						product={cart.product}
						qty={cart.qty}
						itemsStock={itemsStock}
					/>
				))}
			</div>
			{cart == '' && (
				<>
					<img
						className={styled.voidCart}
						src='https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-29/90/empty_cart-512.png'
						alt='Carrito Vacio'
					/>
					<p className={styled.mensaje}>El carrito está vacio</p>
				</>
			)}
			{cart == '' ? (
				<Link to='/' className={styled.btnReturn}>
					Volver al menu principal
				</Link>
			) : (
				<>
					<button onClick={clearCart} className={styled.btnClear}>
						Vaciar Carrito
					</button>
					<p className={styled.totalPrice}>Total a pagar ${totalPrice} </p>
					<form>
						<label htmlFor=''>Nombre y Apellido</label>
						<input type='text' />
						<label htmlFor=''>Email</label>
						<input type='text'/>
						<button className={styled.btnCheckout}>Comprar</button>
					</form>
				</>
			)}
		</div>
	)
}

export default Cart
