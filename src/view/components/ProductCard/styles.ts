import styled from 'styled-components';

interface ImageProps {
  src: string
}

export const Container = styled.div`
  border: 0.0625rem solid rgba(204, 204, 204, 0.4);
  border-radius: 0.5rem;
  height: 123px;

  width: 400px;

  display: flex;
  align-items: center;
  flex-direction: row;

  header {
    font-weight: 500;
    display: flex;
    gap: 0.25rem;
  }

  h1 {
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const Image = styled.div<ImageProps>`
  background: center no-repeat url(${({ src }) => src});
  background-size: cover;

  width: 158px;
  height: 100%;
  border-radius: 0.5rem 0 0 0.5rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  gap: 0.75rem;

  padding: 1rem;
`;
