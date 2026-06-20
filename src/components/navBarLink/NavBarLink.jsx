import { Icon } from '@/components';
import styles from './navBarLink.module.css';

export const NavBarLink = (props) => {
  const { text = '', href, icon, ...linkProps } = props;
  return (
    <a
      className={styles.link}
      href={href}
      {...linkProps}>
      {icon && (
        <Icon
          name={icon}
          ariaHidden
        />
      )}
      {text}
    </a>
  );
};
