import React, { createContext, useEffect, useState } from 'react'

export const myContext = createContext()

const { Provider } = myContext

const CartContext = ({ children }) => {
	const [cart, setCart] = useState([])
	const [cartCount, setCartCount] = useState(0)
	const [totalPrice, setTotalPrice] = useState(0)

	useEffect(() => {
		const numberProductCart = cart.length
		setCartCount(numberProductCart)
	}, [cart])

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

	const quantityModify = (id, qty) => {
		const newCart = cart.map(item => {
			if (item.product.id === id) {
				item.qty = qty
			}
			return item
		})
		setCart(newCart)
	}

	const subTotalPrice = (id, price) => {
		const newCart = cart.map(item => {
			if (item.product.id === id) {
				item.subTotal = price
			}
			return item
		})
		setCart(newCart)
	}

	useEffect(() => {
		const total = cart.reduce((acc, item) => {
			return acc + item.subTotal
		}, 0)
		setTotalPrice(total)
	}, [cart])

	const values = {
		cart,
		addItem,
		removeItem,
		clearCart,
		cartCount,
		setCartCount,
		isInCart,
		quantityModify,
		subTotalPrice,
		totalPrice,
	}

	return <Provider value={values}>{children}</Provider>
}

export default CartContext
