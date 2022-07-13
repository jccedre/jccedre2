import React from 'react';
import styled, { withTheme } from 'styled-components';

// Even though it starts out as an h1 it changes based on props
// using the as prop from styled-components
const StyledTitle = styled.h1`
  color: ${props => props.theme.colors[props.color]};
  font-family: ${props => props.theme.fonts.title};
  font-size: ${props => props.theme.headings[props.type].fontSize};
  margin: 0;
`;

const title = (props) => {
  return (
    <StyledTitle 
    type={props.type}
    as={props.theme.headings[props.type].tag}
    color={props.color}
    >
      {props.content}
    </StyledTitle>
  );
}

export default withTheme(title);