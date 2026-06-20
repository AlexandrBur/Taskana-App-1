import { NavBarLink } from '@/components';
import styles from './navBarList.module.css';

export const NavBarList = () => {
  return (
    <ul className={styles.list}>
      <li>
        <NavBarLink
          text="Входящие"
          href="#"
          icon="Link"
        />
      </li>
    </ul>
  );
};
