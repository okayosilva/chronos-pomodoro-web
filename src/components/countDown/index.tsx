import { useTaskContext } from '../../contexts/taskContext';
import styles from './styles.module.css';

export function CountDown() {
  const { state } = useTaskContext();
  return (
    <div className={styles.countDown}>
      <div className={styles.countDownContent}>
        <h2 className={styles.countDownTitle}>
          {state.fotmattedSecondsRemaining}
        </h2>
      </div>
    </div>
  );
}
