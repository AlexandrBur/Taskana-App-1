import NavBar from '../navBar/NavBar';
import SideBar from '../sideBar/SideBar';
import styles from './content.module.css';

const Content = ({ children }) => {
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

export default Content;
