import { PlusIcon } from 'lucide-react';
import { Button } from '../button';
import { Cycles } from '../cycles';
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
        <form action='' className={styles.taskFormFormContainer}>
          <div className={styles.taskFormFormContent}>
            <Input type='text' placeholder='Adicione uma nova tarefa' />
            <Button type='submit' icon={<PlusIcon size={20} />} />
          </div>
          <Cycles />
        </form>
      </div>
    </div>
  );
}
