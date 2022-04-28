import styled from './ItemListContainer.module.css'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'

const ItemListContainer = ({ saludo }) => {

	const [productos, setProductos] = useState([])
	const [loadig, setLoading] = useState(true)

	const { name } = useParams()

	useEffect(() => {
		if (name) {
			let searchParam = name;
        	const productsCollection = collection(db,"productos")
        	const q = query(productsCollection,where("category","==",searchParam),);
        	getDocs(q)
			.then((result)=>{
				const docs = result.docs
				const lista = docs.map((producto)=>{
					const id = producto.id
					const product={
						id,
						...producto.data()
					}
					return product
				})
				setProductos(lista)
				setLoading(false)
			})
		} else {
			const productsCollection = collection(db, 'productos')
		
		getDocs(productsCollection)
			.then( result => {
				const docs = result.docs
				const productsList = docs.map(doc => {
					const data = doc.data()
					const id = doc.id
					const products = {
						id, 
						...data
					}
					return products
				})
				
		setProductos(productsList)
		setLoading(false)
			})
		}
	}, [name])




	return (
		<div className={styled.itemListContainerBox}>
			<p className={styled.saludo}>{saludo}</p>
			<ItemList productos={productos} />
			{loadig && (
				<img
					className={styled.loading}
					src='https://i.pinimg.com/originals/2b/02/15/2b02159fee58d573c079ad5212d56b63.gif'
					alt='loading'
				/>
			)}
		</div>
	)
}

export default ItemListContainer
