import { Clock } from 'lucide-react';
import styles from './styles.module.css';

export function Logo() {
  return (
    <div className={styles.logo}>
      <a href='/' className={styles.logoLink}>
        <Clock className={styles.icon} />
        <h1 className={styles.title}>CHRONOS</h1>
      </a>
    </div>
  );
}
