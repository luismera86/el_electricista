import './Header.scss'
import logo from '../../assets/img/logo.png'
import NavBar from '../NavBar/NavBar';

const Header = () => {
  return (
    <div className='header'>
      <img className='logo' src={logo} alt="logo" />
      <NavBar/>
    </div>
  );
};

export default Header;
