import { ReactNode } from 'react';

import filter from '@assets/icons/filter.svg';

import { ContentHeader } from '../ContentHeader';
import Spinner from '../Spinner';

import { HeaderButton, LoaderContainer, Table, TableBody } from './styles';

export interface ListProps {
  header: {
    title: string,
    fields: (string | {
      filter: string
    })[],
    action?: {
      text: string,
      function(): void,
    },
  }
  data: object[],
  tableBody: ReactNode,
  isLoading?: boolean,
}

export function List({ header, data, tableBody, isLoading }: ListProps) {
  const { title, action, fields } = header;

  if (!header || !data) {
    return null;
  }

  return (
    <>
      <ContentHeader title={title} length={data.length}>
        {
          action && (
            <HeaderButton onClick={action.function}>
              {action.text}
            </HeaderButton>
          )
        }
      </ContentHeader>

      {isLoading && (
        <LoaderContainer>
          <Spinner />
        </LoaderContainer>
      )}

      {!isLoading && (
        <TableBody>
          <Table>
            <thead>
              <tr>
                {fields.map((field, index) => (
                  typeof field === 'object' ? (
                    <th key={`th-${index}`} className='filter'>
                      <button>
                        {field.filter}
                        <img src={filter} alt='filter' />
                      </button>
                    </th>
                  ) : (
                    <th key={`th-${index}`}>
                      {field}
                    </th>
                  )
                ))}
              </tr>
            </thead>
            <tbody>
              {tableBody}
            </tbody>
          </Table>
        </TableBody>
      )}
    </>
  );
}
