import { ReactNode } from 'react';
import { Container } from './styles';

import info from '../../assets/icons/info.svg';
interface FormGroupProps {
  children: ReactNode,
  error?: string,
  title: string,
}

export function FormGroup({ children, error, title }: FormGroupProps) {
  return (
    <Container>
      <div className='title'>{title}</div>
      {children}
      {
        error && (
          <div className='error'>
            <img src={info} alt='info' />
            <small>
              {error}
            </small>
          </div>
        )
      }
    </Container>
  );
}
