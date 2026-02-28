import MainContainer from '../../components/mainContainer/MainContainer';
import Footer from '../../components/footer/Footer';
import styles from './incomingTasks.module.css';

const IncomingTasks = () => {
  return (
    <div className={styles.wrapper}>
      <MainContainer />
      <Footer />
    </div>
  );
};

export default IncomingTasks;
