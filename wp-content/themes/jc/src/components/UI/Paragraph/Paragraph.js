import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  color: ${props => props.color ? props.theme.colors[props.color] : props.theme.colors.black};
  font-family: ${props => props.fontFamily ? props.theme.fonts[props.fontFamily] : props.theme.fonts.body};
  font-size: ${props => props.fontSize ? props.theme.fontSize[props.fontSize] : props.theme.fontSize.body}; 
  margin: 0;
`;

const paragraph = (props) => {
  return (
    <StyledParagraph
      className={props.className}
      fontFamily={props.fontFamily}
      color={props.color}
      fontSize={props.fontSize}
    >
      {props.content}
    </StyledParagraph>
  );
}

export default paragraph;