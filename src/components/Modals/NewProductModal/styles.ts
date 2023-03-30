import styled from 'styled-components';

interface ImageProps {
  src: string
}

export const Content = styled.div`
  margin-top: 48px;
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

  gap: 32px;
`;

export const FormContent = styled.div`
  width: 41rem;

  h2 {
    font-weight: 500;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.gray['400']};
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 24px;

    button {
      font-weight: 500;
      font-size: 14px;
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
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.gray['400']};
  }

  .category {
    margin: 32px 0 1rem 0;
    font-weight: 400;
    font-size: 14px;
  }
`;

export const ImageContainer = styled.div`
  width: 41rem;
  height: 244px;

  margin: 1rem 0 32px 0;

  border: 1px solid ${({ theme }) => theme.colors.gray['200']};
  border-radius: 8px;

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
    gap: 8px;
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
  height: 160px;
  border-radius: 8px 0 0 8px;
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
`;

export const Category = styled.div``;

export const IngredientsList = styled.div`
  height: 476px;
  display: flex;
  flex-direction: column;
  gap: 4px;

  overflow: auto;
  scroll-behavior: smooth;
`;

export const Ingredient = styled.div`
  padding: 1rem;

  border: 1px solid ${({ theme }) => theme.colors.gray['-300']};
  border-radius: 8px;

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
  gap: 8px;
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 32px;

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

