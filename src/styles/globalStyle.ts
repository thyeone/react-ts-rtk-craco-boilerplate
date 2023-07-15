import { createGlobalStyle } from 'styled-components';
import { reset } from '@styles/reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
    
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border:none
  }
  
  ul,
  li {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
