import notebook from '../../assets/images/notebook.svg';
import styles from './statistic.module.css';

const Statistic = () => {
  return (
    <div className={styles.statistic}>
      <img
        src={notebook}
        alt="notebook"
      />
      <p>
        Здесь мы поможем тебе управлять твоими задачами, отслеживать статистику и самочувствие.
      </p>
    </div>
  );
};

export default Statistic;
