import { List, ListProps } from '../List';

import { useCategories } from '../../../app/context/categoriesContext';
import { useModal } from '../../../app/context/modalContext';

import editIcon from '../../assets/icons/edit.svg';
import deleteIcon from '../../assets/icons/delete.svg';

export function Categories() {
  const { categories } = useCategories();
  const { handleUseModal } = useModal();

  const header: ListProps['header'] = {
    title: 'Categorias',
    fields: ['Emoji', 'Nome', 'Ações'],
    action: {
      text: 'Nova Categoria',
      function: () => handleUseModal('NewCategory')
    }
  };

  const body = categories.map(category => (
    <tr className='categories' key={category._id}>
      <td>{category.icon}</td>
      <td>{category.name}</td>
      <td className='actions'>
        <button onClick={() => handleUseModal('EditCategory', { category })}>
          <img src={editIcon} alt='edit' />
        </button>

        <button onClick={() => handleUseModal('DeleteCategory', { category })}>
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
