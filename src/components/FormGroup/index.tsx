import { ReactNode } from 'react';
import { Container } from './styles';

interface FormGroupProps {
  children: ReactNode,
  title: string
}

export function FormGroup({ children, title }: FormGroupProps) {
  return (
    <Container>
      <div className='title'>{title}</div>
      {children}
    </Container>
  );
}
