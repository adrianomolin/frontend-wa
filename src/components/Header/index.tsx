import { ReactNode } from 'react';
import { Container, Content } from './styles';

interface HeaderProps {
  icon: ReactNode,
  title: string,
  description: string,
  children?: ReactNode,
}

export function Header({ icon, title, description, children }: HeaderProps) {
  return (
    <Container>
      <Content>
        <div className="page-details">
          <div className='title'>
            {icon}
            <h1>{title}</h1>
          </div>
          <h2>{description}</h2>
        </div>
        {children}
      </Content>
    </Container>
  );
}
