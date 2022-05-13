import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc, collection } from 'firebase/firestore'
import { db } from '../../firebase/firebase'

const ItemDetailContainer = () => {
	const [producto, setProducto] = useState({})

	const { id } = useParams()

	useEffect(() => {
		const productsCollection = collection(db, 'productos')
		const refDoc = doc(productsCollection, id)
		getDoc(refDoc).then(result => {
			const product = {
				id,
				...result.data(),
			}
			setProducto(product)
		})
	}, [])

	return (
		<>
			<ItemDetail key={producto.id} producto={producto} />
		</>
	)
}

export default ItemDetailContainer
