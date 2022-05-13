import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import styled from './Cart.module.css'
import {
	addDoc,
	collection,
	serverTimestamp,
	updateDoc,
	doc,
} from 'firebase/firestore'
import { db } from '../../firebase/firebase'
import Formulario from '../Formulario/Formulario'
import swal from 'sweetalert'

const Cart = () => {
	const { cart, clearCart, totalPrice } = useContext(myContext)
	const [idVenta, setIdVenta] = useState('')
	const [user, setUser] = useState('')

	const finalizarCompra = () => {
		const ventaCollection = collection(db, 'ventas')
		addDoc(ventaCollection, {
			user,
			items: cart,
			data: serverTimestamp(),
			totalPrice,
		}).then(result => {
			setIdVenta(result.id)
			swal({
				title: 'Operación Completada',
				text: `Total pagado $${totalPrice}
				 	   ID de compra: ${result.id}`,
				icon: 'success',
				button: 'Volver al carrito',
			})
		})

		cart.forEach(p => {
			const updateCollection = doc(db, 'productos', p.product.id)
			updateDoc(updateCollection, { stock: p.product.stock - p.qty })
		})

		clearCart()
	}

	return (
		<div className=' container d-flex flex-column align-items-center cart'>
			<div className=' container d-flex  w-100 align-content-between'>
				{cart.map(cart => (
					<CartItem
						key={cart.product.id}
						product={cart.product}
						qty={cart.qty}
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

					<Formulario
						finalizarCompra={finalizarCompra}
						setUser={setUser}
						user={user}
					/>
				</>
			)}
		</div>
	)
}

export default Cart
