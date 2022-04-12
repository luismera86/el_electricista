import React, { useContext } from 'react'
import { myContext } from '../CartContext/CartContext'
import CartItem from '../CartItem/CartItem'
import styled from './Cart.module.css'

const Cart = () => {
	const { cart, clearCart } = useContext(myContext)

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
			{cart === '' && <p className={styled.mensaje}>El carrito está vacio</p>}
			<button onClick={clearCart} className={styled.btnClear}>
				Vaciar Carrito
			</button>
		</div>
	)
}

export default Cart

// Insertar un map del array cart para mostrar los productos del carrito
