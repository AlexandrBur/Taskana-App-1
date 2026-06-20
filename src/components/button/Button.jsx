import { Icon } from '@/components';
import styles from './button.module.css';

export const Button = (props) => {
  const {
    label,
    icon,
    className,
    loading = false,
    disabled = false,
    type = 'button',
    ...buttonProps
  } = props;

  return (
    <button
      className={`${styles.button} ${className || ''} ${loading ? styles.loading : ''}`}
      disabled={disabled || loading}
      type={type}
      aria-label={!label && loading ? 'Загрузка...' : undefined}
      aria-busy={loading ? 'true' : undefined}
      {...buttonProps}>
      <span className={styles.content}>
        {icon && (
          <Icon
            name={icon}
            ariaHidden
          />
        )}
        {label}
      </span>
      {loading && (
        <Icon
          name="Loading"
          ariaHidden
          className={styles.spinner}
        />
      )}
    </button>
  );
};
