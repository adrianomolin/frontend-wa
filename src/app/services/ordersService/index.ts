import { remove } from './delete';
import { getAll } from './getAll';
import { resetAll } from './resetAll';
import { update } from './update';

export const ordersService = {
  getAll,
  update,
  delete: remove,
  resetAll,
};
