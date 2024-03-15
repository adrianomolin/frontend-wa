import editIcon from '../../assets/icons/edit.svg';
import deleteIcon from '../../assets/icons/delete.svg';
import { List, ListProps } from '../List';
import { formatCurrency } from '../../../app/utils/formatCurrency';
import { useModal } from '../../../app/context/modalContext';
import { useProducts } from '../../../app/context/productsContext';

export function Products() {
  const { handleUseModal } = useModal();
  const { products } = useProducts();

  const header: ListProps['header'] = {
    title: 'Produtos',
    fields: ['Imagem', 'Nome', 'Categoria', 'Preço', 'Ações'],
    action: {
      text: 'Novo Produto',
      function: () => handleUseModal('NewProduct')
    }
  };

  const body = products.map(product => (
    <tr key={product._id}>
      <td><img className='image' src={product.imagePath} alt={product.name} /></td>
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
  ));

  return <List
    header={header}
    data={products}
    tableBody={body}
  />;
}
