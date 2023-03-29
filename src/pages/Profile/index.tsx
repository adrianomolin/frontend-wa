import { ProfileIcon } from '../../assets/icons/profile';
import { Header } from '../../components/Header';
import { Container, Content } from '../styles';

export function Profile() {
  return (
    <Container>
      <Header
        icon={<ProfileIcon />}
        title='Meu Perfil'
        description='Gerencie seu perfil'
      />
      <Content>
        Perfil
      </Content>
    </Container>
  );
}
