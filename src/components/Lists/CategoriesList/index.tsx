import { useCategories } from '../../../context/categoriesContext';
import { useModal } from '../../../context/modalContext';

import editIcon from '../../../assets/icons/edit.svg';
import deleteIcon from '../../../assets/icons/delete.svg';

import { Container, HeaderButton, Table } from './styles';

import { ContentHeader } from '../../ContentHeader';


export function CategoriesList() {
  const { categories } = useCategories();
  const { handleUseModal } = useModal();

  return (
    <Container>
      <ContentHeader title='Categorias' length={categories.length}>
        <HeaderButton onClick={() => handleUseModal('NewCategory')}>
          Nova Categoria
        </HeaderButton>
      </ContentHeader>
      <Table>
        <thead>
          <tr>
            <th>Emoji</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {
            categories.map(category => (
              <tr key={category._id}>
                <td>{category.icon}</td>
                <td>{category.name}</td>
                <td>
                  <div className='actions'>
                    <button onClick={() => handleUseModal('EditCategory', { category })}>
                      <img src={editIcon} alt='edit' />
                    </button>

                    <button onClick={() => handleUseModal('DeleteCategory', { category })}>
                      <img src={deleteIcon} alt='delete' />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>

      </Table>
    </Container>
  );
}
