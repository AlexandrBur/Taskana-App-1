import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Проект выполнен в рамках стажировки &nbsp;
        <a
          href="https://preax.ru"
          target="_blank"
          className={styles.link}>
          preax
        </a>
      </p>
    </footer>
  );
};

export default Footer;
