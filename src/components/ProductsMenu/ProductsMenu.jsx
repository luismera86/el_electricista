import React from 'react'
import { Link } from 'react-router-dom'
import styled from './ProductsMenu.module.css'

const ProductsMenu = () => {
	return (
		<>
			<ul>
				<li className={styled.list}>
					<Link className={styled.navLink} to='#'>
						Tableors Eléctricos
					</Link>
				</li>
				<li className={styled.list}>
					<Link className={styled.navLink} to='#'>
						Inatalciones fijas
					</Link>
				</li>
				<li className={styled.list}>
					<Link className={styled.navLink} to='#'>
						Iluminación
					</Link>
				</li>
			</ul>
		</>
	)
}

export default ProductsMenu
