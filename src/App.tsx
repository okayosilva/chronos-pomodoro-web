import { Container } from './components/container';
import { CountDown } from './components/countDown';
import { Logo } from './components/logo';
import { Menu } from './components/menu';
import './styles/index.css';

export function App() {
  return (
    <div style={{ margin: '0 2rem 0 2rem' }}>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>
    </div>
  );
}
