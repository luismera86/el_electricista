import styled from './NavBar.module.css'
import { useContext } from 'react'
import { CardWidget } from '../CardWidget/CardWidget'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import { myContext } from '../../context/CartContext'
import './index.css'

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

	const { cartCount } = useContext(myContext)

	return (
		<div>
			<div>
				<div className={styled.navBarContainer}>
					<NavLink to='/'>
						<img className={styled.logo} src={logo} alt='logo' />
					</NavLink>
					<div />
				</div>

				<nav className='navbar navbar-expand-lg navbar-dark'>
					<div className='container-fluid'>
						<button
							className='navbar-toggler'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#navbarSupportedContent'
							aria-controls='navbarSupportedContent'
							aria-expanded='false'
							aria-label='Toggle navigation'
						>
							<span className='navbar-toggler-icon'></span>
						</button>
						<div
							className='collapse navbar-collapse'
							id='navbarSupportedContent'
						>
							<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
								<li className='nav-item'>
									<NavLink
										className='nav-link active'
										aria-current='page'
										to='/'
									>
										Inicio
									</NavLink>
								</li>
								<li className='nav-item'>
									<a className='nav-link active' href='#'>
										Nosotros
									</a>
								</li>
								<li className='nav-item dropdown'>
									<a
										className='nav-link active dropdown-toggle'
										href='#'
										id='navbarDropdown'
										role='button'
										data-bs-toggle='dropdown'
										aria-expanded='false'
									>
										Productos
									</a>

									<ul
										className='dropdown-menu'
										aria-labelledby='navbarDropdown'
									>
										{category.map(element => {
											return (
												<NavLink
													key={element.id}
													className='dropdown-item'
													to={element.rout}
												>
													{element.name}
												</NavLink>
											)
										})}
									</ul>
								</li>
								<li className='nav-item'>
									<a className='nav-link active'>Contacto</a>
								</li>
							</ul>
						</div>
					</div>
					<section className={styled.acountBox}>
						<NavLink to='/cart' className=' d-flex'>
							<CardWidget />
							<div className={styled.cartCount}>{cartCount}</div>
						</NavLink>
					</section>
				</nav>
			</div>
		</div>
	)
}

export default NavBar

