import Button from '@components/Button';
import Input from '@components/Input';
import { FormGroup } from '@components/FormGroup';

import { Actions, Content, Form } from './styles';
import { Modal } from '@view/components/Modal';
import { useIngredientsModalController } from '../useIngredientsModalController';

export function NewIngredientModal() {
  const {
    ingredient,
    isIngredientValid,
    isCreateIngredientModalOpen,
    handleCloseCreateModal,
    handleInputChange,
    handleCreateIngredient,
  } = useIngredientsModalController();

  return (
    <Modal title='Novo ingrediente' isOpen={isCreateIngredientModalOpen} onClose={handleCloseCreateModal}>
      <Content>
        <Form onSubmit={handleCreateIngredient}>
          <FormGroup title='Emoji'>
            <Input
              value={ingredient.icon}
              type=''
              onChange={(e) => handleInputChange('icon', e.currentTarget.value)}
              width='25.5'
              placeholder='Ex: 🧀'
            />
          </FormGroup>

          <FormGroup title='Nome do Ingrediente'>
            <Input
              value={ingredient.name}
              onChange={(e) => handleInputChange('name', e.currentTarget.value)}
              width='25.5'
              placeholder='Ex: Queijo'
            />
          </FormGroup>

          <Actions>
            <Button
              type="submit"
              width='12.1875'
              disabled={!isIngredientValid}
            >
              Salvar Alterações
            </Button>
          </Actions>
        </Form>
      </Content>
    </Modal>
  );
}
