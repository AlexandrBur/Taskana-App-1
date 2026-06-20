import { TaskList } from '@/components';
import styles from './mainContainer.module.css';

export const MainContainer = () => {
  return (
    <div className={styles.mainContainer}>
      {/* Скрытый h1 для SEO и доступности */}
      <h1 className="visuallyHidden">Панель управления задачами</h1>

      <h2 className={styles.title}>Входящие</h2>
      <TaskList />
    </div>
  );
};
