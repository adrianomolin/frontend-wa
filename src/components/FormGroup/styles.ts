import styled from 'styled-components';

export const Container = styled.div`
  .title {
    color: ${({ theme }) => theme.colors.gray['500']};
    margin-bottom: 8px;
    font-size: 14px;
  }

  & + & {
    margin-top: 32px;
  }
`;
