import { FormEvent, useState } from 'react';

import Button from '../../../../../../components/Button';
import Input from '../../../../../../components/Input';
import { FormGroup } from '../../../../../../components/FormGroup';

import { Actions, Content, Form } from './styles';
import closeIcon from '../../../assets/icons/close-icon.svg';
import { useIngredients } from '../../../../../../../app/context/IngredientsContext';

export function NewIngredientModal() {
  const [icon, setIcon] = useState('');
  const [name, setName] = useState('');
  const [, setActive] = useState(false);

  const { handleCreateNewIngredient } = useIngredients();

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

    handleCreateNewIngredient({
      icon,
      name
    });
  }

  return (
    <>
      <header>
        <strong>
          Novo Ingrediente
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

          <FormGroup title='Nome do Ingrediente'>
            <Input
              value={name}
              onChange={(e) => handleNameInput(e)}
              width='25.5'
              placeholder='Ex: Queijo'
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
