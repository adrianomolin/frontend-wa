import { Actions, Content } from './styles';

import Button from '@components/Button';
import { Category } from '@components/Category';
import { useCategoriesModalController } from '../useCategoriesModaController';
import { Modal } from '@view/components/Modal';

export function DeleteCategoryModal() {
  const {
    selectedCategory,
    isDeleteCategoryModalOpen,
    handleCloseDeleteCategoryModal,
    handleDeleteCategory,
  } = useCategoriesModalController();

  if (!selectedCategory) return null;

  return (
    <Modal isOpen={isDeleteCategoryModalOpen} onClose={handleCloseDeleteCategoryModal} title='Deletar Categoria'>
      <Content>

        <div className="content-items">
            Tem certeza que deseja excluir a categoria?
        </div>
        <div>
          <Category icon={selectedCategory.icon} name={selectedCategory.name}/>
        </div>
      </Content>

      <Actions>
        <button
          type="button"
          className="secondary"
          onClick={handleCloseDeleteCategoryModal}
        >
          Manter categoria
        </button>

        <Button
          type="button"
          width='11.6875'
          onClick={handleDeleteCategory}
        >
              Excluir categoria
        </Button>
      </Actions>
    </Modal>
  );
}
