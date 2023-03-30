import { formatCurrency } from '../../../utils/formatCurrency';

import { useModal } from '../../../context/modalContext';
import { useProducts } from '../../../context/productsContext';

import editIcon from '../../../assets/icons/edit.svg';
import deleteIcon from '../../../assets/icons/delete.svg';

import { Container, Image, HeaderButton, Table } from './styles';

import { ContentHeader } from '../../ContentHeader';

export function ProductsList() {
  const { handleUseModal } = useModal();
  const { products } = useProducts();

  return (
    <Container>
      <ContentHeader title='Produtos' length={products.length}>
        <HeaderButton onClick={() => handleUseModal('NewProduct')}>
          Novo Produto
        </HeaderButton>
      </ContentHeader>
      <Table>
        <thead>
          <tr>
            <th>Imagem</th>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {
            products.length > 0 && (
              products.map(product => (
                <tr key={product._id}>
                  <td><Image src={product.imagePath} /></td>
                  <td>{product.name}</td>
                  <td>{`${product.category.icon} ${product.category.name}`}</td>
                  <td>{formatCurrency(product.price)}</td>
                  <td>
                    <div className='actions'>
                      <button onClick={() => handleUseModal('EditProduct', { product })}>
                        <img src={editIcon} alt='edit' />
                      </button>

                      <button onClick={() => handleUseModal('DeleteProduct', { product })}>
                        <img src={deleteIcon} alt='delete' />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )
          }
        </tbody>

      </Table>
    </Container>
  );
}
