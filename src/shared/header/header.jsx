import React from 'react';
import { StyledHeader } from './header.styled';

export const Header = () => {
    return(
      <StyledHeader type="primary">
          <h1>Titulo</h1>
          <nav>
              <ul>
                  <li>Item1</li>
                  <li>Item2</li>
                  <li>Item3</li>
              </ul>
          </nav>
      </StyledHeader>
    )
}