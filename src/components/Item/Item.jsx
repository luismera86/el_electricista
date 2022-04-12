import { useNavigate } from 'react-router-dom'
import styled from './Item.module.css'

	export const Item = ({ products }) => {

	
	const { id, title, description, price, pictureUrl } = products

	const path = useNavigate()
	const navegar = () => {
		path('/producto/' + id)
	}

	return (
		<div onClick={navegar} className={styled.item}>
			<h2 className={styled.h2}>{title}</h2>
			<img className={styled.imgProducto} src={pictureUrl} alt='' />
			<p className={styled.p}>{description}</p>
			<h4 className={styled.h4}>Pecio ${price}</h4>
			<button className={styled.button} type='button'>
				Ver detalles
			</button>
		</div>
	)
}
