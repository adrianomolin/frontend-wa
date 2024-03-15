import { formatDate } from '../../../app/utils/formatDate';

import { useOrders } from '../../../app/context/ordersContext';
import { useModal } from '../../../app/context/modalContext';

import editIcon from '../../assets/icons/eye.svg';
import deleteIcon from '../../assets/icons/delete.svg';
import { List, ListProps } from '../List';

export function OrdersHistory() {
  const {
    orders,
    getProductsName,
    getCategoriesName,
    getTotal,
    deleteOrder
  } = useOrders();

  const { handleUseModal } = useModal();

  const header: ListProps['header'] = {
    title: 'Pedidos',
    fields: ['Mesa', {
      'filter': 'Data'
    }, 'Itens', 'Categoria', 'Total', 'Ações'],
  };

  const tableBody = orders.map(order => (
    <tr key={order._id}>
      <td>{order.table}</td>
      <td>{formatDate(order.createdAt)}</td>
      <td>{getProductsName(order)}</td>
      <td>{getCategoriesName(order)}</td>
      <td>{getTotal(order)}</td>
      <td>
        <div className='actions'>
          <button onClick={() => handleUseModal('OrderHistory', { order })}>
            <img src={editIcon} alt='edit' />
          </button>

          <button onClick={() => deleteOrder(order._id)}>
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
  />;
}
