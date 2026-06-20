import { Button, Logo, ThemeSwitcher } from '@/components';
import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.right}>
        <Button
          label="Создать"
          icon="Create"
        />
        <ThemeSwitcher />
      </div>
    </header>
  );
};
