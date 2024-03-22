import styled from 'styled-components';

export const Table = styled.table`
  flex: 1;
  width: 100%;
  font-size: 0.875rem;
  border-spacing: 0;
  border-collapse: separate;
  border-radius: 0.5rem;
  border: 0.0625rem solid ${({ theme }) => theme.colors.gray['-400']};
  overflow: auto;

  td, th {
    text-align: left;
    padding: 1rem;
    width: 19%;
  }

  button, .filter button {
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

export const CenteredContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
