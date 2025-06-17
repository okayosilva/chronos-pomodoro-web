import { Container } from '../../components/container';
import { Footer } from '../../components/footer';
import { Logo } from '../../components/logo';
import { Menu } from '../../components/menu';

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <div>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>

      <Container>{children}</Container>
      <Container>
        <Footer />
      </Container>
    </div>
  );
}
