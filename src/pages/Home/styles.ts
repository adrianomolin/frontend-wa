import styled from 'styled-components';

export const Button = styled.button`
  background: transparent;
  border: 0;
  outline: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  font-weight: 600;

  color: ${({ theme }) => theme.colors.primary.main};

  svg {
    stroke: ${({ theme }) => theme.colors.primary.main}
  }
`;
