import { createContext, useContext } from 'react';
import type { TaskStateModel } from '../../models/taskStateModel';

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  fotmattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25 * 60,
    shortBreakTime: 5 * 60,
    longBreakTime: 15 * 60,
  },
};

const initialContextValue: TaskContextProps = {
  state: initialState,
  setState: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);

export const TaskContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <TaskContext.Provider value={initialContextValue}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskContextProvider');
  }
  return context;
};
