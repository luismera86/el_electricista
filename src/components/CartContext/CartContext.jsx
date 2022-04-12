import React, { createContext, useState} from 'react'

export const myContext = createContext()

const { Provider } = myContext


const CartContext = ({ children }) => {
	
	const [cart, setCart] = useState([])

    
	const addItem = (product, qty) => {
		const newProduct = {
			product,
			qty
		} 

		setCart([...cart, newProduct])
		 

	}

	const removeItem = (itemId) => {
		const newCart = cart.filter(item => item.product.id !== itemId)
		setCart(newCart)
		
	} 
	const clearCart = () => {
		const cartClear = []
		setCart(cartClear)
	}
	const isInCart = () => {} 

	return <Provider value={{cart, addItem , removeItem, clearCart}}>{children}</Provider>
}

export default CartContext
