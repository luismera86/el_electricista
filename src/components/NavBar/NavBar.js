import styles from './NavBar.module.css'
import { CardWidget } from "../CardWidget";
const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <a className={styles.a} href='#!'>INICIO</a>
        </li>
        <li className={styles.li}>
          <a className={styles.a} href="#!">PRODUCTOS</a>
        </li>
        <li className={styles.li}>
          <a className={styles.a} href="#!">NOSOTROS</a>
        </li>
        <li className={styles.li}>
          <a className={styles.a} href="#!">CONTACTO</a>
        </li>
      </ul>
      <section className={styles.user}>
        <a className={styles.acount} href="#!">INICIAR SESION</a>
        <CardWidget />
      </section>
    </nav>
  );
};

export default NavBar;
