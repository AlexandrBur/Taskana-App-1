import { Illustration } from '@/components';
import styles from './taskList.module.css';

export const TaskList = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.header}>Все твои задачи организованы как надо</h3>
      <p className={styles.text}>Отличная работа! Ты большой молодец!</p>
      <Illustration name="Tasks" />
    </div>
  );
};
