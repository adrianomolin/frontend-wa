import { createGlobalStyle, DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  interface DefaultTheme {
    colors: {
      primary: {
        main: string,
        light: string,
        dark: string,
      },
      gray: {
        500: string,
        400: string,
        300: string,
        200: string,
        100: string,
        0: string,
        '-400': string,
        '-300': string,
        '-200': string
      },
    };
    boxShadow: string
  }
}

export const GlobalStyles = createGlobalStyle<{theme: DefaultTheme}>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'General Sans', sans-serif;
  }

  html {
    height: 100%;
  }

  body {
    background: #fafafa;
    color: #333;
    height: 100%;
    font-size: 16px;
  }

  button {
    cursor: pointer;
    font-size: 1rem;

    background: transparent;
    border: 0;
    outline: 0;

    transition: all ease-in .2s;

  }

  button.secondary {
    color: ${({ theme }) => theme.colors.primary.main};

    &:hover {
      color: ${({ theme }) => theme.colors.primary.light};
    }

    &:active {
      color: ${({ theme }) => theme.colors.primary.dark};
    }
  }

  #root {
    height: 100%;
  }

  .container {
    display: flex;
    flex-direction: row;
  }

  @media only screen and (max-height: 900px) {
    body {
      font-size: 12px;
    }
  }
`;
