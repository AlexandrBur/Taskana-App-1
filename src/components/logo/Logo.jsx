import { Icon } from '@/components';
import styles from './logo.module.css';

export const Logo = () => {
  return (
    <a
      className={styles.main}
      href="#"
      aria-label="Логотип">
      <Icon
        name="Logo"
        ariaHidden
      />
    </a>
  );
};
