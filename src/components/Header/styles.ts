import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  height: 72px;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details {

    .title {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 8px;
    }

    svg {
      stroke: ${({ theme  }) => theme.colors.gray['500']}
    }

    h1 {
      color: ${({ theme  }) => theme.colors.gray['500']};
      font-weight: 600;
      font-size: 24px;
    }

    h2 {
      color: #${({ theme  }) => theme.colors.gray['400']};
      font-weight: 500;
      font-size: 16px;
      opacity: 0.9;
      margin-top: 16px;
    }
  }
`;
