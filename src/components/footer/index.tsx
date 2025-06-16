import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <a href='#'>Entenda como funciona a técnica pomodoro</a>
        <span>
          Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💛
        </span>
      </div>
    </footer>
  );
}
