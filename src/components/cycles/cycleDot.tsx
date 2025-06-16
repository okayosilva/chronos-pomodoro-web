import styles from './styles.module.css';

interface CycleDotProps {
  type: 'work' | 'shortBreak' | 'longBreak';
  active?: boolean;
}

export function CycleDot({ type = 'work', active = false }: CycleDotProps) {
  return (
    <span className={styles.cyclesDotContainer}>
      {active && (
        <span
          className={`${styles.cyclesDotPing} ${styles[`${type}Cycle`]}`}
        ></span>
      )}

      <span
        className={`${styles.cyclesDotStatic} ${styles[`${type}Cycle`]}`}
      ></span>
    </span>
  );
}
