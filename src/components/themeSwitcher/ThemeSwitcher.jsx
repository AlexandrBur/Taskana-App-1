import { useEffect } from 'react';
import { Icon } from '@/components';
import { useTheme } from '@/contexts/theme';
import styles from './themeSwitcher.module.css';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      className={styles.main}
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? 'Переключить на светлую тему' : 'Переключить на тёмную тему'}
      role="switch"
      aria-checked={isDark}>
      <span className={`${styles.slider} ${isDark ? styles.dark : ''}`} />

      <span className={`${styles.icon} ${!isDark ? styles.active : ''}`}>
        <Icon
          name="Sun"
          ariaHidden
        />
      </span>
      <span className={`${styles.icon} ${isDark ? styles.active : ''}`}>
        <Icon
          name="Moon"
          ariaHidden
        />
      </span>
    </button>
  );
};
