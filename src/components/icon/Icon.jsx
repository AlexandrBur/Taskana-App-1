import styles from './icon.module.css';

const Icon = ({ svg, width = '24px', height = '24px' }) => {
  return (
    <span
      style={{width, height}}
      className={`${styles.icon} ${styles[svg]}`}
      aria-hidden="true"></span>
  );
};

export default Icon;
