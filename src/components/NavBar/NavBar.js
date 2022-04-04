import styled from './NavBar.module.css'
import { CardWidget } from '../CardWidget'
const NavBar = () => {
	return (
		<nav className={styled.navBar}>
			<ul className={styled.ulList}>
				<li className={styled.list}>
					<a className={styled.navLink} href='#!'>
						INICIO
					</a>
				</li>
				<li className={styled.list}>
					<a className={styled.navLink} href='#!'>
						PRODUCTOS
					</a>
				</li>
				<li className={styled.list}>
					<a className={styled.navLink} href='#!'>
						NOSOTROS
					</a>
				</li>
				<li className={styled.list}>
					<a className={styled.navLink} href='#!'>
						CONTACTO
					</a>
				</li>
			</ul>
			<section>
				<a className={styled.acountLink} href='#!'>
					INICIAR SESION
				</a>
				<CardWidget />
			</section>
		</nav>
	)
}

export default NavBar
