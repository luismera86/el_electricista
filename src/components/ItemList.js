import React, { useState } from 'react'
import { Item } from './Item'

export const ItemList = () => {
    const [productos, setProductos] = useState([])

    

  return (
    <>
        <Item productos={productos} setProductos={setProductos} />
    </>
  )
}

