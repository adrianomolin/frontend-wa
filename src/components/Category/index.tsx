import { Container } from './styles';

interface NewCategory {
  active? : boolean,
  icon: string,
  name: string,
}

export function Category({ active, icon, name }: NewCategory) {
  return (
    <Container active={active}>
      <div>{icon}</div>
      <div>{name}</div>
    </Container>
  );
}
