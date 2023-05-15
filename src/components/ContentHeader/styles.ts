import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 2rem;
  margin-bottom: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Information = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 0.5rem;

  color: ${({ theme }) => theme.colors.gray['500']};
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 18px;
`;

export const ItemsLength = styled.div`
  padding: 0.25rem 0.5rem;
  background: ${({ theme }) => theme.colors.gray['-200']};
  border-radius: 0.25rem;
  font-weight: 500;
`;
