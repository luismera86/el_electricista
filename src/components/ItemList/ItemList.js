
import styles from './ItemList.module.css'
import { Item } from '../Item/Item'

export const ItemList = ({productos}) => {


  return (
    <div className={styles.itemsContainer}>
      {productos.map(products => 
        <Item key={products.id} products={products} />
      )}
    </div>
  )
}
