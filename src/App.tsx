import { TaskContextProvider } from './contexts/taskContext/taskContextProvider';
import { Home } from './pages/home';
import './styles/index.css';

export function App() {
  return (
    <TaskContextProvider>
      <div style={{ margin: '0 2rem 0 2rem' }}>
        <Home />
      </div>
    </TaskContextProvider>
  );
}
