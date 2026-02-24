import Icon from '../icon/Icon';
import styles from './navBarLink.module.css';

const NavBarLink = ({ children, svg }) => {
  return (
    <a
      className={styles.link}
      href="#">
      <Icon svg={svg} />
      {children}
    </a>
  );
};

export default NavBarLink;
