import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;
export const lightTheme = {
  body: '#F9FAFB',
  text: '#0C1821'
};
export const darkTheme = {
  body: '#0C1821',
  text: '#f1f1f1'
};