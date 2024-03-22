import { formatDate } from '@app/utils/formatDate';
import editIcon from '@assets/icons/eye.svg';
import deleteIcon from '@assets/icons/delete.svg';
import { List, ListProps } from '@components/List';
import { useHistoryController } from '../../components/HistoryContext/useHistoryController';

export function HistoryList() {
  const { orders, handleOpenHistoryModal, handleOpenDeleteModal, isLoading } = useHistoryController();

  const header: ListProps['header'] = {
    title: 'Pedidos',
    fields: ['Mesa', {
      'filter': 'Data'
    }, 'Itens', 'Categoria', 'Total', 'Ações'],
  };

  if (!orders) {
    return null;
  }

  const tableBody = orders.map(order => (
    <tr key={order._id}>
      <td>{order.table}</td>
      <td>{formatDate(order.createdAt)}</td>
      <td>{order.productsName}</td>
      <td>{order.categoriesName}</td>
      <td>{order.total}</td>
      <td>
        <div className='actions'>
          <button onClick={() => handleOpenHistoryModal(order)}>
            <img src={editIcon} alt='edit' />
          </button>

          <button onClick={() => handleOpenDeleteModal(order)}>
            <img src={deleteIcon} alt='delete' />
          </button>
        </div>
      </td>
    </tr>
  ));

  return <List
    header={header}
    data={orders}
    tableBody={tableBody}
    isLoading={isLoading}
  />;
}
