import { Table } from './styles';

import filter from '../../../assets/icons/filter.svg';
import editIcon from '../../../assets/icons/eye.svg';
import deleteIcon from '../../../assets/icons/delete.svg';
import { useOrders } from '../../../context/ordersContext';
import { formatDate } from '../../../utils/formatDate';
import { useModal } from '../../../context/modalContext';

export function OrdersHistory() {
  const {
    orders,
    getProductsName,
    getCategoriesName,
    getTotal,
    deleteOrder
  } = useOrders();


  console.log(orders);

  const { handleUseModal } = useModal();

  return (
    <Table>
      <thead>
        <tr>
          <th>Mesa</th>
          <th className='filter'>
            <button>
            Data
              <img src={filter} alt='filter' />
            </button>
          </th>
          <th>Itens</th>
          <th>Categoria</th>
          <th>Total</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {
          orders.length > 0 && (
            orders.map(order => (
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
            ))
          )
        }
      </tbody>

    </Table>
  );
}
