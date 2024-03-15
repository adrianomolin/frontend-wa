import { ReactNode } from 'react';
import { Container, Information, ItemsLength, Title } from './styles';

interface ContentHeaderProps {
  children?: ReactNode,
  title: string,
  length: number
}

export function ContentHeader({ children, title, length }: ContentHeaderProps) {

  return (
    <Container>
      <Information>
        <Title>
          {title}
        </Title>
        <ItemsLength>
          {length}
        </ItemsLength>
      </Information>
      {
        children ? children : null
      }
    </Container>
  );
}
