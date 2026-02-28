import Button from '../button/Button';
import Logo from '../logo/Logo';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Button svg='plus'>
        Создать
      </Button>
    </header>
  );
};

export default Header;
