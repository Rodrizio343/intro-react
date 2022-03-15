import styled from 'styled-components';
import { css } from 'styled-components';

// Con props

export const StyledHeader = styled.header(({theme, type}) => {

    const headerColor = {
      primary: `${theme.colors.primary}`,
      secondary: theme.colors.secondary
    }
  
    return css`
    background-color: ${headerColor[type]};
    h1 {
      color: #fff;
    }
    nav {
      background: red;
      li {
        list-style: none;
        color: blue;
        &:hover {
          background-color: gray;
        }
      }
    }
  `}
);

// Sin props

// export const StyledHeader = styled.header`
//   background-color: green;
//   h1 {
//     color: #fff;
//   }
//   nav {
//     background: red;
//     li {
//       list-style: none;
//       color: blue;
//       &:hover {
//         background-color: gray;
//       }
//     }
//   }
// `;