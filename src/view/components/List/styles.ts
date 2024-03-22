import styled from 'styled-components';

export const TableBody = styled.div`
  height: 100%;
  overflow: auto;
`;

export const Container = styled.div`
  height: 85%;
`;

export const HeaderButton = styled.button`
  outline: 0;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: 0.875rem;
  font-weight: 600;
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Table = styled.table`
  width: 100%;
  font-size: 0.875rem;
  border-spacing: 0;
  border-collapse: separate;
  border-radius: 0.5rem;
  border: 0.0625rem solid ${({ theme }) => theme.colors.gray['-400']};
  overflow: auto;

  thead {
    position: sticky;
    top: 0;
    z-index: 1;
  }

  tbody {
    border-collapse: collapse;
  }

  td, th {
    text-align: left;
    padding: 1rem;
  }

  td:not(:last-child) , th:not(:last-child) {
    max-width: 100%;
  }

  .categories td:first-child, .categories th:first-child {
    width: 2.5%;
  }

  button {
    outline: 0;
    background: transparent;
    border: none;
    font-weight: 600;
    font-size: 0.875rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  tbody tr {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray['500']}
  }

  tbody tr:nth-child(2n+2) {
    outline: 0.0625rem solid ${({ theme }) => theme.colors.gray['-400']};;
  }

  thead tr {
    background: ${({ theme }) => theme.colors.gray['-200']}
  }

  td .image {
    width: 3rem;
    height: 2rem;
    border-radius: 0.5rem;
  }

  th:last-child, .actions {
    width: 2.5%;
  }

  .actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    button {
      height: 40px;
      width: 40px;

      outline: 0;

      img {
        background: transparent;
      }
    }
  }
`;
