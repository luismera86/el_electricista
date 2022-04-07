import styled from './Header.module.css'
import logo from '../../assets/img/logo.png'
import NavBar from '../NavBar/NavBar'
import { NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<div className={styled.header}>
			<NavLink to='/'>
				<img className={styled.logo} src={logo} alt='logo' />
			</NavLink>
			<NavBar />
		</div>
	)
}

export default Header
