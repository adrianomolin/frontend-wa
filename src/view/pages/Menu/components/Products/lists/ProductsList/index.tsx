import editIcon from '@assets/icons/edit.svg';
import deleteIcon from '@assets/icons/delete.svg';
import { List, ListProps } from '@components/List';
import { formatCurrency } from '@app/utils/formatCurrency';
import { useProductsController } from '../../ProductsContext/useProductsController';

export function ProductsList() {
  const { products, handleOpenCreateProductModal, handleOpenEditProductModal, handleOpenDeleteProductModal } = useProductsController();

  const header: ListProps['header'] = {
    title: 'Produtos',
    fields: ['Imagem', 'Nome', 'Categoria', 'Preço', 'Ações'],
    action: {
      text: 'Novo Produto',
      function: () => handleOpenCreateProductModal()
    }
  };

  const body = products?.map(product => (
    <tr key={product._id}>
      <td><img className='image' src={product.imagePath} alt={product.name} /></td>
      <td>{product.name}</td>
      <td>{`${product.category.icon} ${product.category.name}`}</td>
      <td>{formatCurrency(product.price)}</td>
      <td>
        <div className='actions'>
          <button onClick={() => handleOpenEditProductModal(product)}>
            <img src={editIcon} alt='edit' />
          </button>

          <button onClick={() => handleOpenDeleteProductModal(product)}>
            <img src={deleteIcon} alt='delete' />
          </button>
        </div>
      </td>
    </tr>
  ));

  return <List
    header={header}
    data={products}
    tableBody={body}
  />;
}
