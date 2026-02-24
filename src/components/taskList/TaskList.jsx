import styles from './taskList.module.css';
import emptyTask from '../../assets/images/empty-task.svg';

const TaskList = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Все твои задачи организованы как надо</h2>
      <p className={styles.text}>Отличная работа! Ты большой молодец!</p>
      <img
        src={emptyTask}
        alt="empty-task"
      />
    </div>
  );
};

export default TaskList;
