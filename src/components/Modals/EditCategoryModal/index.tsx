import { FormEvent, useState } from 'react';

import Button from '../../Button';
import Input from '../../Input';
import { FormGroup } from '../../FormGroup';
import { useModal } from '../../../context/modalContext';

import { Actions, Content, Form } from './styles';
import closeIcon from '../../../assets/icons/close-icon.svg';
import { useCategories } from '../../../context/categoriesContext';

export function EditCategoryModal() {
  const { handleCloseModal, selectedModalProps, handleUseModal} = useModal();
  const { handleEditCategory } = useCategories();
  const { category } = selectedModalProps;

  if (!category) {
    return null;
  }

  const [icon, setIcon] = useState(category.icon);
  const [name, setName] = useState(category.name);
  const [, setActive] = useState(false);


  function handleIconInput(e: FormEvent<HTMLInputElement>) {
    setIcon(e.currentTarget.value);
    !e.currentTarget.value || !name ? setActive(false) : setActive(true);
  }

  function handleNameInput(e: FormEvent<HTMLInputElement>) {
    setName(e.currentTarget.value);
    !e.currentTarget.value || !icon ? setActive(false) : setActive(true);
  }

  function handleDelete() {
    handleUseModal('DeleteCategory', { category: selectedModalProps });
  }

  function handleEdit(event: FormEvent) {
    event.preventDefault();

    handleEditCategory({
      _id: category!._id,
      icon,
      name
    });
    handleCloseModal();
  }

  return (
    <>
      <header>
        <strong>
          Editar Categoria
        </strong>

        <button type="button">
          <img src={closeIcon} alt="Fechar" onClick={handleCloseModal} />
        </button>
      </header>

      <Content>

        <Form onSubmit={handleEdit}>
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
            <button
              type="button"
              className="secondary"
              onClick={handleDelete}
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
    </>
  );
}
