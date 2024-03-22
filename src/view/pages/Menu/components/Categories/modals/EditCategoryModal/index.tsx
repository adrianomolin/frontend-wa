import Button from '@components/Button';
import Input from '@components/Input';
import { FormGroup } from '@components/FormGroup';

import { Actions, Content, Form } from './styles';
import { useCategoriesModalController } from '../useCategoriesModaController';
import { Modal } from '@view/components/Modal';

export function EditCategoryModal() {
  const { category, selectedCategory, handleInputChange, isEditCategoryModalOpen, handleCloseEditModal, handleOpenDeleteCategoryModal, handleSubmitEditCategory } = useCategoriesModalController();

  if (!selectedCategory) return null;

  return (
    <Modal isOpen={isEditCategoryModalOpen} onClose={handleCloseEditModal} title='Editar Categoria'>
      <Content>

        <Form onSubmit={handleSubmitEditCategory}>
          <FormGroup title='Emoji'>
            <Input
              value={category.icon}
              type=''
              onChange={(e) => handleInputChange('icon', e.currentTarget.value)}
              width='25.5'
              placeholder='Ex: 🧀'
            />
          </FormGroup>

          <FormGroup title='Nome da Categoria'>
            <Input
              value={category.name}
              onChange={(e) => handleInputChange('name', e.currentTarget.value)}
              width='25.5'
              placeholder='Ex: Lanches'
            />
          </FormGroup>

          <Actions>
            <button
              type="button"
              className="secondary"
              onClick={() => handleOpenDeleteCategoryModal(selectedCategory)}
            >
              Excluir categoria
            </button>

            <Button
              type="submit"
              width='12.1875'
            >
              Salvar Alterações
            </Button>
          </Actions>
        </Form>
      </Content>
    </Modal>
  );
}
