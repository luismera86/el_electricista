import React, { useContext } from 'react'
import { myContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import styled from './Cart.module.css'

const Cart = () => {
	const { cart, clearCart, totalPrice } = useContext(myContext)

	return (
		<div className={styled.containerCart}>
			<div className={styled.cart}>
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
				<button className={styled.btnReturn}>Volver al menu principal</button>
			) : (
				<>
				<button onClick={clearCart} className={styled.btnClear}>
					Vaciar Carrito
				</button>
				<p className={styled.totalPrice}>Total a pagar ${totalPrice} </p>
				</>
			)}
		</div>
	)
}

export default Cart
