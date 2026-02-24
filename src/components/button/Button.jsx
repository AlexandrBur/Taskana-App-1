import Icon from '../icon/Icon';
import styles from './button.module.css';

const Button = ({ children, svg }) => {
  return (
    <button className={styles.button}>
      <Icon svg={svg}/>
      {children}
    </button>
  );
};

export default Button;
