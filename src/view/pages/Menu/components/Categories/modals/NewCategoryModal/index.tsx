import { FormEvent, useState } from 'react';

import Button from '../../../../../../components/Button';
import Input from '../../../../../../components/Input';
import { FormGroup } from '../../../../../../components/FormGroup';

import { Actions, Content, Form } from './styles';
import { useCategories } from '../../../../../../../app/hooks/useCategories';
import { useCategoriesController } from '../../useCategoriesController';
import { Modal } from '../../../../../../components/Modal';

export function NewCategoryModal() {
  const [icon, setIcon] = useState('');
  const [name, setName] = useState('');
  const [, setActive] = useState(false);

  const { handleCloseCreateCategoryModal, isCreateCategoryModalOpen } = useCategoriesController();
  const { handleCreateNewCategory } = useCategories();

  function handleIconInput(e: FormEvent<HTMLInputElement>) {
    setIcon(e.currentTarget.value);
    !e.currentTarget.value || !name ? setActive(false) : setActive(true);
  }

  function handleNameInput(e: FormEvent<HTMLInputElement>) {
    setName(e.currentTarget.value);
    !e.currentTarget.value || !icon ? setActive(false) : setActive(true);
  }
  function handleCreate(event: FormEvent) {
    event.preventDefault();

    handleCreateNewCategory({
      icon,
      name
    });

    handleCloseCreateCategoryModal();
  }

  return (
    <Modal isOpen={isCreateCategoryModalOpen} onClose={handleCloseCreateCategoryModal} title='Nova categoria'>
      <Content>
        <Form onSubmit={handleCreate}>
          <FormGroup title='Emoji'>
            <Input
              value={icon}
              type=''
              onChange={(e) => handleIconInput(e)}
              width='25.5'
              placeholder='Ex: 🧀'
            />
          </FormGroup>

          <FormGroup title='Nome da Categoria'>
            <Input
              value={name}
              onChange={(e) => handleNameInput(e)}
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
