import React, { useContext, useEffect } from 'react'
import { myContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import styled from './Cart.module.css'

const Cart = () => {
	const { cart, clearCart, cartCount, setCartCount } = useContext(myContext)

	useEffect(() => {
		const total = cart.reduce((acc, item) => acc + item.product.price * item.qty, 0)
		return setCartCount(total)
	}, [cart])
	

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
			{cart == '' && 
			<>
			<img className={styled.voidCart} src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-29/90/empty_cart-512.png" alt="Carrito Vacio" />
			<p className={styled.mensaje}>El carrito está vacio</p>
			</>}
			{cart == '' ? <button className={styled.btnReturn}>Volver al menu princila</button> : <button onClick={clearCart} className={styled.btnClear}>
				Vaciar Carrito
			</button>}
			
		</div>
	)
}

export default Cart


