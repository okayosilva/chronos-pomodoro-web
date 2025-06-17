import { Container } from '../../components/container';
import { CountDown } from '../../components/countDown';
import { TaskForm } from '../../components/taskForm';
import { MainTemplate } from '../../templates/mainTemplate';

export function Home() {
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <TaskForm />
      </Container>
    </MainTemplate>
  );
}
