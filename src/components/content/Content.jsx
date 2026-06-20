import { NavBar, SideBar } from '@/components';
import styles from './content.module.css';

export const Content = ({ children }) => {
  return (
    <div className={styles.container}>
      <aside className={styles.sideBarLeft}>
        <NavBar />
      </aside>

      <main>
        {children} {/* сюда придёт IncomingTasks */}
      </main>

      <aside className={styles.sideBarRight}>
        <SideBar />
      </aside>
    </div>
  );
};
