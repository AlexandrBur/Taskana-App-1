import { MainContainer, Footer } from '@/components';
import styles from './incomingTasks.module.css';

export const IncomingTasks = () => {
  return (
    <div className={styles.wrapper}>
      <MainContainer />
      <Footer />
    </div>
  );
};
