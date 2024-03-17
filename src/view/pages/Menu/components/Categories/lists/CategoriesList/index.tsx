import { List, ListProps } from '../../../../../../components/List';

import editIcon from '../../../../../../../assets/icons/edit.svg';
import deleteIcon from '../../../../../../../assets/icons/delete.svg';
import { useCategoriesController } from '../../useCategoriesController';

export function CategoriesList() {
  const { categories, handleOpenCreateCategoryModal, handleOpenEditCategoryModal, handleOpenDeleteCategoryModal } = useCategoriesController();

  const header: ListProps['header'] = {
    title: 'Categorias',
    fields: ['Emoji', 'Nome', 'Ações'],
    action: {
      text: 'Nova Categoria',
      function: () => handleOpenCreateCategoryModal()
    }
  };

  const body = categories.map(category => (
    <tr className='categories' key={category._id}>
      <td>{category.icon}</td>
      <td>{category.name}</td>
      <td className='actions'>
        <button onClick={() => handleOpenEditCategoryModal(category)}>
          <img src={editIcon} alt='edit' />
        </button>

        <button onClick={() => handleOpenDeleteCategoryModal(category)}>
          <img src={deleteIcon} alt='delete' />
        </button>
      </td>
    </tr>
  ));

  return <List
    header={header}
    data={categories}
    tableBody={body}
  />;
}
