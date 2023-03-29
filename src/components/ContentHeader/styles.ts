import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 32px;
  margin-bottom: 32px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Information = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 8px;

  color: ${({ theme }) => theme.colors.gray['500']};
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 18px;
`;

export const ItemsLength = styled.div`
  padding: 4px 8px;
  background: ${({ theme }) => theme.colors.gray['-200']};
  border-radius: 4px;
  font-weight: 500;
`;
