import { FormEvent, useState } from 'react';

import Button from '../../Button';
import Input from '../../Input';
import { FormGroup } from '../../FormGroup';
import { useModal } from '../../../context/modalContext';

import { Actions, Content, Form } from './styles';
import closeIcon from '../../../assets/icons/close-icon.svg';
import { useCategories } from '../../../context/categoriesContext';

export function NewCategoryModal() {
  const [icon, setIcon] = useState('');
  const [name, setName] = useState('');
  const [, setActive] = useState(false);

  const { handleCloseModal } = useModal();
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
    handleCloseModal();
  }

  return (
    <>
      <header>
        <strong>
          Nova Categoria
        </strong>

        <button type="button">
          <img src={closeIcon} alt="Fechar" onClick={handleCloseModal} />
        </button>
      </header>

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
    </>
  );
}
