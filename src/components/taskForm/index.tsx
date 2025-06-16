import plusIcon from '../../assets/plus-icon.svg';
import { Button } from '../button';
import { Input } from '../input';
import styles from './styles.module.css';

export function TaskForm() {
  return (
    <div className={styles.taskFormContainer}>
      <div className={styles.taskFormContent}>
        <div className={styles.taskFormHeader}>
          <h2>Tarefas</h2>
          <p>Crie tarefas e organize sua rotina em um só lugar.</p>
        </div>
        <form action='' className={styles.taskFormForm}>
          <Input type='text' placeholder='Adicione uma nova tarefa' />
          <Button type='submit'>
            <img
              src={plusIcon}
              alt='Adicionar'
              className={styles.taskFormButtonIcon}
            />
          </Button>
        </form>
      </div>
    </div>
  );
}
