import styles from './Header.module.css'
import logo from '../../assets/img/logo.png'
import NavBar from '../NavBar/NavBar';

const Header = () => {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={logo} alt="logo" />
      <NavBar/>
    </div>
  );
};

export default Header;
