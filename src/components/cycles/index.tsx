import { CycleDot } from './cycleDot';
import styles from './styles.module.css';

export function Cycles() {
  return (
    <div className={styles.cyclesContainer}>
      <div className={styles.cyclesHeader}>
        <h3>Ciclos</h3>
        <p>
          Ciclo é o tempo que você leva para concluir uma tarefa. Exemplo: 25
          minutos de trabalho e 5 minutos de descanso.
        </p>
      </div>

      <div className={styles.cyclesContent}>
        <CycleDot type='work' active />
        <CycleDot type='shortBreak' />
        <CycleDot type='longBreak' />
      </div>
    </div>
  );
}
