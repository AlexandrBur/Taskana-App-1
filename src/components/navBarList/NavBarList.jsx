import NavBarLink from '../navBarLink/NavBarLink';
import styles from './navBarList.module.css';

const NavBarList = () => {
  return (
    <ul className={styles.list}>
      <li>
        <NavBarLink svg="inbox">Входящие</NavBarLink>
      </li>
    </ul>
  );
};

export default NavBarList;
