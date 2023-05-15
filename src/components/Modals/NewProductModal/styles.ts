import styled from 'styled-components';

interface ImageProps {
  src: string,
}

export const Content = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Form = styled.form``;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  gap: 2rem;
`;

export const FormContent = styled.div`
  width: 26rem;

  h2 {
    font-weight: 500;
    font-size: 1.125rem;
    color: ${({ theme }) => theme.colors.gray['400']};
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 1.5rem;

    button {
      font-weight: 500;
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.primary.main}

    }
  }

  .product {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    div:nth-child(n+2) {
      margin-top: 0;
    }

    margin-bottom: 1rem;
  }

  .search-input {
    margin-bottom: 1rem;
  }

  small {
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors.gray['400']};
  }

  .category {
    margin: 2rem 0 1rem 0;
    font-weight: 400;
    font-size: 0.875rem;
  }
`;

export const ImageContainer = styled.div`
  width: 26rem;
  height: 15.25rem;

  margin: 1rem 0 2rem 0;

  border: 0.0625rem solid ${({ theme }) => theme.colors.gray['200']};
  border-radius: 0.5rem;

  input {
    overflow: hidden;
    color: transparent;
    height: 34%;
    width: 100%;
    padding: 1rem;
  }

  input[type=file]::file-selector-button {
    width: 100%;
    height: 100%;
    border: 0;
    background: transparent;
  }

  input[type="file"] {
    display: none;
  }

  .custom-file-upload {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    height: 34%;
    cursor: pointer;

    h3 {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: 500;
    }
  }
`;

export const Image = styled.div<ImageProps>`
  background: center no-repeat url(${({ src }) => src});
  background-size: cover;

  width: 100%;
  height: 10rem;
  border-radius: 0.5rem 0 0 0.5rem;
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const Category = styled.div``;

export const IngredientsList = styled.div`
  height: 29.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  overflow: auto;
  scroll-behavior: smooth;
`;

export const Ingredient = styled.div`
  padding: 1rem;

  border: 0.0625rem solid ${({ theme }) => theme.colors.gray['-300']};
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .checkbox:checked {
    color: ${({ theme }) => theme.colors.primary.main};
    background: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const Name = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 2rem;

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

