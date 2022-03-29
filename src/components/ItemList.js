import React from 'react'

import { Item } from './Item'

export const ItemList = ({productos}) => {


  return (
    <div className='items-container'>
      {productos.map(products => 
        <Item key={products.id} products={products} />
      )}
    </div>
  )
}
