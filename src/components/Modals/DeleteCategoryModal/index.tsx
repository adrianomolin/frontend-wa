import { Actions, Content } from './styles';

import closeIcon from '../../../assets/icons/close-icon.svg';
import Button from '../../Button';
import { useModal } from '../../../context/modalContext';
import { Category } from '../../Category';
import { useCategories } from '../../../context/categoriesContext';

export function DeleteCategoryModal() {
  const { handleCloseModal, selectedModalProps } = useModal();
  const { handleDeleteCategory } = useCategories();
  const { category } = selectedModalProps;

  if (!category) {
    return null;
  }

  function deleteCategory() {
    handleCloseModal();
    handleDeleteCategory(category!._id);
  }

  return (
    <>
      <header>
        <strong>
          Excluir Categoria
        </strong>

        <button type="button">
          <img src={closeIcon} alt="Fechar" onClick={handleCloseModal} />
        </button>
      </header>

      <Content>

        <div className="content-items">
            Tem certeza que deseja excluir a categoria?
        </div>
        <div>
          <Category icon={category.icon} name={category.name}/>
        </div>
      </Content>

      <Actions>
        <button
          type="button"
          className="secondary"
          onClick={handleCloseModal}
        >
              Manter categoria
        </button>

        <Button
          active
          type="button"
          width={187}
          onClick={deleteCategory}
        >
              Excluir categoria
        </Button>
      </Actions>
    </>
  );
}
