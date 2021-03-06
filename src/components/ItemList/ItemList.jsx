import styled from './ItemList.module.css'
import Item from '../Item/Item'

const ItemList = ({ productos }) => {
	return (
		<div className={styled.itemsContainer}>
			{productos.map(products => (
				<Item key={products.id} products={products} />
			))}
		</div>
	)
}

export default ItemList
