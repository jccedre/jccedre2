/*
 * BrowserWarning Functional Component
 * This component displays the browser warning container.
 */

import React from 'react';
import styled from 'styled-components';


const StyledBrowserWarning = styled.div`
  z-index: 401;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: ${props => props.theme.colors.backdrop};
  display: ${props => props.show ? 'flex' : 'none'};
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const StyledBrowserContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledHeader = styled.h1`
  color: ${props => props.theme.colors.white};
  letter-spacing: 0.5px;
  width: 100%;
  margin: 0;
`;

const StyledSubHeader = styled.h3`
  color: ${props => props.theme.colors.white};
  letter-spacing: 0.5px;
  width: 100%;
`;

const StyledParagraph = styled.p`
  color: ${props => props.theme.colors.white};
  width: 100%;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 1em;
`;

const StyledListItem = styled.li`
  margin: 0.5em;
`;

const StyledLabel = styled.p`
  color: ${props => props.theme.colors.white};
  margin: 0.2em 0 0 0;
`;

const browserWarning = ( props ) => {
  return(
    <StyledBrowserWarning show={props.show}>
      <StyledBrowserContent>
        <StyledHeader>Hmm, looks like you're using a browser which isn't supported.</StyledHeader>
        <StyledParagraph>Please update your browser for the best viewing experience.</StyledParagraph>
        <StyledList>
          {props.browserItems.map((browser) => (
            <StyledListItem key={browser.id}>
              <browser.browserIcon />
              <StyledLabel>{browser.browserVersion}</StyledLabel>
            </StyledListItem>
          ))}
        </StyledList>
      </StyledBrowserContent>
    </StyledBrowserWarning>
  );
}

export default browserWarning;
