import { useEffect, useState } from 'react'
import ItemDetail  from '../ItemDetail/ItemDetail'
import { productosIniciales } from '../../mock/productos.js'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
	const promesa = new Promise(res => {
		res(productosIniciales)
	})

	const [producto, setProducto] = useState({})

	const { id } = useParams()
	const idProducto = parseInt(id)

	useEffect(() => {
		promesa.then(producto => {
			if (id) {
				setProducto(producto.find(producto => producto.id === idProducto))
			} else {
				setProducto(producto)
			}
		})
	}, [idProducto])

	return (
		<>
			<ItemDetail key={producto.id} producto={producto} />
		</>
	)
}

export default ItemDetailContainer