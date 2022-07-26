import React from 'react';
import styled from 'styled-components';


const StyledCardAccent = styled.svg`
  max-width: 320px;
  width: 100%;
.st0 {
  fill: ${props => props.theme.colors.white};
  opacity: 0.03;
  }
`;

const cardAccent = (props) => {
  return (
    <StyledCardAccent viewBox="0 0 325.5 341.1" className={props.className}>
      <path id="vector_BG_object" className="st0" d="M97.1,0L0,81.5l81.5,97.1L38.1,297.8l119.2,43.4L200.6,222l124.9-22l-22-124.9l-124.9,22
	L97.1,0z"/>
    </StyledCardAccent>
  );
}

export default cardAccent;