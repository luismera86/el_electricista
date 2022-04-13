import styled from './NavBar.module.css'
import { useState } from 'react'
import { CardWidget } from '../CardWidget/CardWidget'
import { Link, NavLink } from 'react-router-dom'
//Corregir la ruta de la imagen
import logo from '../../assets/img/logo.png'
const NavBar = () => {
	const category = [
		{
			name: 'Tableors Eléctricos',
			rout: 'category/tableors-electricos',
			id: 1,
		},
		{
			name: 'Inatalciones fijas',
			rout: 'category/inatalciones-fijas',
			id: 2,
		},
		{
			name: 'Iluminacion',
			rout: 'category/iluminacion',
			id: 3,
		},
	]

	const [categoryProducts, setCategoryProducts] = useState(false)

	const menu = () => {
		if (categoryProducts) {
			setCategoryProducts(false)
		} else {
			setCategoryProducts(true)
		}
	}

	return (
		<div className={styled.navBarContainer}>
			<NavLink to='/'>
				<img className={styled.logo} src={logo} alt='logo' />
			</NavLink>
			<div className={styled.nav}>
				<nav className={styled.navBar}>
					<ul className={styled.ulList}>
						<li className={styled.list}>
							<NavLink className={styled.navLink} to='/'>
								INICIO
							</NavLink>
						</li>
						<li className={styled.list}>
							<NavLink onClick={menu} className={styled.navLink} to='#'>
								PRODUCTOS
							</NavLink>
							{categoryProducts &&
								category.map(element => {
									return (
										<NavLink
											key={element.id}
											className={styled.navLink}
											to={element.rout}
										>
											{element.name}
										</NavLink>
									)
								})}
						</li>
						<li className={styled.list}>
							<NavLink className={styled.navLink} to='#!'>
								NOSOTROS
							</NavLink>
						</li>
						<li className={styled.list}>
							<NavLink className={styled.navLink} to='#!'>
								CONTACTO
							</NavLink>
						</li>
					</ul>
				</nav>
				<section className={styled.acountBox}>
					<Link className={styled.acountLink} to='#!'>
						INICIAR SESION
					</Link>
					<NavLink to='/cart'>
						<CardWidget />
					</NavLink>
				</section>
			</div>
		</div>
	)
}

export default NavBar

