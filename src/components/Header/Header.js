import styled from './Header.module.css'
import logo from '../../assets/img/logo.png'
import NavBar from '../NavBar/NavBar'

const Header = () => {
	return (
		<div className={styled.header}>
			<img className={styled.logo} src={logo} alt='logo' />
			<NavBar />
		</div>
	)
}

export default Header
