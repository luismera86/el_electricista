import React, { createContext, useState } from 'react'

export const myContext = createContext()

const { Provider } = myContext

const CartContext = ({ children }) => {
	const [cart, setCart] = useState([])
	const [cartCount, setCartCount] = useState(0)

	const addItem = (product, qty) => {
		const newProduct = {
			product,
			qty,
		}

		if (isInCart(product.id)) {
			const porductFind = cart.find(item => item.product.id === product.id)
			const index = cart.indexOf(porductFind)
			const newCart = [...cart]
			newCart[index].qty += qty
			setCart(newCart)
		} else {
			setCart([...cart, newProduct])
		}
	}

	const removeItem = itemId => {
		const newCart = cart.filter(item => item.product.id !== itemId)
		setCart(newCart)
	}
	const clearCart = () => {
		const cartClear = []
		setCart(cartClear)
	}
	const isInCart = id => {
		if (cart.find(item => item.product.id === id)) return true
	}

	const values = {
		cart, 
		addItem, 
		removeItem, 
		clearCart,
		cartCount,
		setCartCount,
	}

	return (
		<Provider value={values}>
			{children}
		</Provider>
	)
}

export default CartContext
