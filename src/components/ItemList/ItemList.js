
import './ItemList.scss'
import { Item } from '../Item/Item'

export const ItemList = ({productos}) => {


  return (
    <div className='itemsContainer'>
      {productos.map(products => 
        <Item key={products.id} products={products} />
      )}
    </div>
  )
}
