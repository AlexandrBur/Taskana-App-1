import { Illustration } from '@/components';
import styles from './statistic.module.css';

export const Statistic = () => {
  return (
    <div className={styles.statistic}>
      <Illustration name="Side" />
      <p>
        Здесь мы поможем тебе управлять твоими
        <br />
        задачами, отслеживать статистику
        <br />и самочувствие.
      </p>
    </div>
  );
};
