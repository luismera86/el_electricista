import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from './ItemCount.module.css'

const ItemCount = ({ producto, onAdd }) => {
	const { stock } = producto
	const [count, setCount] = useState(1)
	const [state, setState] = useState(true)

	const btnSum = () => (count < stock ? setCount(count + 1) : setCount(stock))
	const btnRes = () => (count >= 1 ? setCount(count - 1) : setCount(0))
	const addCart = () => {
		setState(false)
		count <= stock && onAdd(count)
	}

	return (
		<div>
			{state ? (
				<>
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
				</>
			) : (
				''
			)}
			{state === false && (
				<Link className={styled.buysButton} type='button' to='/cart'>
					Finalizar Compra
				</Link>
			)}
		</div>
	)
}

export default ItemCount
