import { useState } from 'react'
import styled from './ItemCount.module.css'

const ItemCount = ({ producto, onAdd}) => {
	
	
	

	const { stock } = producto
	const [count, setCount] = useState(1)

	const btnSum = () => (count < stock ? setCount(count + 1) : setCount(stock))
	const btnRes = () => (count >= 1 ? setCount(count - 1) : setCount(0))
	const addCart = () => (count <= stock && onAdd(false, count)) 
	
	return (
		<div className={styled.countBox} >
			<div className={styled.counterBox}>
				<button className={styled.btnSum} onClick={btnSum}>
					+
				</button>
				<p className={styled.countResult}>{count}</p>
				<button className={styled.btnRes} onClick={btnRes}>
					-
				</button>
			</div>
			<button onClick={addCart} className={styled.btnAddCart}>
				Agregar al carrito
			</button>
		</div>
	)
}

export default ItemCount
