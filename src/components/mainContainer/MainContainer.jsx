import TaskList from '../taskList/TaskList';
import styles from './mainContainer.module.css';

const MainContainer = () => {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>Входящие</h1>
      <TaskList />
    </div>
  );
};

export default MainContainer;
