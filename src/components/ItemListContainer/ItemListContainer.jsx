import styled from './ItemListContainer.module.css'
import { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { productosIniciales } from '../../mock/productos.js'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ saludo }) => {
	const promesa = new Promise(res => {
		setTimeout(() => {
			res(productosIniciales)
		}, 2000)
	})

	const [productos, setProductos] = useState([])

	const { name } = useParams()

	useEffect(() => {
		promesa.then(productos => {
			if (name) {
				setProductos(productos.filter(producto => producto.category === name))
			} else {
				setProductos(productos)
			}
		})
	}, [name])

	return (
		<div className={styled.itemListContainerBox}>
			<p className={styled.saludo}>{saludo}</p>

			<ItemList productos={productos} />
		</div>
	)
}

export default ItemListContainer
