import styled from './ItemListContainer.module.css'
import { useEffect, useState } from 'react'

//import ItemCount from "./ItemCount";
import { ItemList } from '../ItemList/ItemList'

const productosIniciales = [
	{
		id: 1,
		title: 'Térmica 2X10',
		description: 'Interruptor termomágnetico',
		price: 1600,
		pictureUrl:
			'https://http2.mlstatic.com/D_NQ_NP_2X_857137-MLA40604581692_012020-F.webp',
	},
	{
		id: 2,
		title: 'Térmica 2X16',
		description: 'Interruptor termomágnetico',
		price: 1600,
		pictureUrl:
			'https://http2.mlstatic.com/D_NQ_NP_2X_857137-MLA40604581692_012020-F.webp',
	},
	{
		id: 3,
		title: 'Térmica 2X20',
		description: 'Interruptor termomágnetico',
		price: 1650,
		pictureUrl:
			'https://http2.mlstatic.com/D_NQ_NP_2X_857137-MLA40604581692_012020-F.webp',
	},
	{
		id: 4,
		title: 'Térmica 2X25',
		description: 'Interruptor termomágnetico',
		price: 1700,
		pictureUrl:
			'https://http2.mlstatic.com/D_NQ_NP_2X_857137-MLA40604581692_012020-F.webp',
	},
]

const ItemListContainer = ({ saludo }) => {
	const promesa = new Promise(res => {
		setTimeout(() => {
			res(productosIniciales)
		}, 2000)
	})

	const [productos, setProductos] = useState([])
	const [carga, setCarga] = useState(true)

	useEffect(() => {
		promesa.then(productos => {
			setProductos(productos)
			setCarga(false)
		})
	}, [])

	//const onAdd = (count) => {
	//alert(`Agregaste ${count} items al carrito`);
	// };
	return (
		<div className={styled.itemListContainerBox}>
			<p className={styled.saludo}>{saludo}</p>
			{carga && (
				<img
					src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'
					alt='cargando'
				/>
			)}
			<ItemList productos={productos} />
		</div>
	)
}

export default ItemListContainer
