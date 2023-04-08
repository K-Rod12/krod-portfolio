import {createGlobalStyle } from "styled-components";
import fonts from './fonts';
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
  ${fonts};
  ${variables};

  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ::selection {
    background-color: var(--lightest-navy);
    color: var(--lightest-slate);
  }

  
//   body {
//     margin: 0;
//     width: 100%;
//     min-height: 100%;
//     overflow-x: hidden;
//     -moz-osx-font-smoothing: grayscale;
//     -webkit-font-smoothing: antialiased;
//     background-color: var(--navy);
//     color: var(--slate);
//     font-family: var(--font-sans);
//     font-size: var(--fz-xl);
//     line-height: 1.3;

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

//   main {
//     margin: 0 auto;
//     width: 100%;
//     max-width: 1600px;
//     min-height: 100vh;
//     padding: 200px 150px;

//     @media (max-width: 1080px) {
//       padding: 200px 100px;
//     }
//     @media (max-width: 768px) {
//       padding: 150px 50px;
//     }
//     @media (max-width: 480px) {
//       padding: 125px 25px;
//     }

//     &.fillHeight {
//       padding: 0 150px;

//       @media (max-width: 1080px) {
//         padding: 0 100px;
//       }
//       @media (max-width: 768px) {
//         padding: 0 50px;
//       }
//       @media (max-width: 480px) {
//         padding: 0 25px;
//       }
//     }
//   }

//   section {
//     margin: 0 auto;
//     padding: 100px 0;
//     max-width: 1000px;

//     @media (max-width: 768px) {
//       padding: 80px 0;
//     }

//     @media (max-width: 480px) {
//       padding: 60px 0;
//     }
//   }

//   h1,
//   h2,
//   h3,
//   h4,
//   h5,
//   h6 {
//     margin: 0 0 10px 0;
//     font-weight: 600;
//     color: var(--lightest-slate);
//     line-height: 1.1;
//   }

  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
  }

  .medium-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 60px);
  }

  .numbered-heading {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0 40px;
    width: 100%;
    font-size: clamp(26px, 5vw, var(--fz-heading));
    white-space: nowrap;

    &:before {
      position: relative;
      bottom: 4px;
      counter-increment: section;
      content: '0' counter(section) '.';
      margin-right: 10px;
      color: var(--green);
      font-family: var(--font-mono);
      font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
      font-weight: 400;

      @media (max-width: 480px) {
        margin-bottom: -3px;
        margin-right: 5px;
      }
    }

    &:after {
      content: '';
      display: block;
      position: relative;
      top: -5px;
      width: 300px;
      height: 1px;
      margin-left: 20px;
      background-color: var(--lightest-navy);

      @media (max-width: 1080px) {
        width: 200px;
      }
      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 600px) {
        margin-left: 10px;
      }
    }
  }


  input, textarea {
    border-radius: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }


  hr {
    background-color: var(--lightest-navy);
    height: 1px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    margin: 1rem;
  }

  code {
    font-family: var(--font-mono);
    font-size: var(--fz-md);
  }

  #logo {
    color: var(--green);
  }

  .overline {
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;
  }

  .subtitle {
    color: var(--green);
    margin: 0 0 20px 0;
    font-size: var(--fz-md);
    font-family: var(--font-mono);
    font-weight: 400;
    line-height: 1.5;
    @media (max-width: 1080px) {
      font-size: var(--fz-sm);
    }
    @media (max-width: 768px) {
      font-size: var(--fz-xs);
    }

`;

export default GlobalStyle;