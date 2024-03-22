import { remove } from './delete';
import { getAll } from './getAll';

export const historyService = {
  getAll,
  delete: remove,
};
