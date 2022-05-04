import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root{
    --color-black: #000000;
    --color-white: #ffffff;
    --color-gray: #e5e5e5;
    --color-gold: #fca311;
    --color-blue-navy: #14213d;

    --max-width: 1440px;
    --min-width: 320px:
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  font-size: 16px;

  button{
    border: 0;
    outline: 0;

    cursor: pointer;
  }
`;
