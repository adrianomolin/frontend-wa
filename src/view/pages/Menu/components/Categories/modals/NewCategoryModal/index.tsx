import { FormEvent } from 'react';

import Button from '@components/Button';
import Input from '@components/Input';
import { FormGroup } from '@components/FormGroup';

import { Actions, Content, Form } from './styles';
import { Modal } from '@components/Modal';
import { useCategoriesModalController } from '../useCategoriesModaController';

export function NewCategoryModal() {
  const {
    category,
    handleInputChange,
    handleCloseCreateCategoryModal,
    isCreateCategoryModalOpen
  } = useCategoriesModalController();

  function handleCreate(event: FormEvent) {
    event.preventDefault();

    handleCloseCreateCategoryModal();
  }

  return (
    <Modal isOpen={isCreateCategoryModalOpen} onClose={handleCloseCreateCategoryModal} title='Nova categoria'>
      <Content>
        <Form onSubmit={handleCreate}>
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
