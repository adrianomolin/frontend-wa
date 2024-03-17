import { useContext } from 'react';
import { HistoryContext } from '.';

export function useHistoryController() {
  return useContext(HistoryContext);
}
