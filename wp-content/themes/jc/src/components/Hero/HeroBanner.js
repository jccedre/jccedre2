import React from 'react';
import styled from 'styled-components';

const StyledHeroBanner = styled.p`
  font-size: 3.75rem;
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  grid-column-start: 1;
  margin: 0;
  font-family: ${props => props.theme.fonts.title};
  position: absolute;
  bottom: 0;
  z-index: 2;
  

  ${props => props.theme.media.largeSmall`
    font-size: 5rem;
  `}

  ${props => props.theme.media.large`
    font-size: 7.375rem; 
    transform: rotate(-90deg);
    white-space: nowrap;
    text-align: left;
    transform-origin: bottom;
    width: 0;
    bottom: 0;
    right: -15px;
  `}

   ${props => props.theme.media.xlarge`
      font-size: 8.375rem; 
      transform: rotate(-90deg);
      white-space: nowrap;
      text-align: left;
      transform-origin: bottom;
      width: 0;
      bottom: 0;
      right: -10px;
  `}
`;

const heroBanner = (props) => {
  return (
    <StyledHeroBanner>
      {props.content}
    </StyledHeroBanner>
  );
}

export default heroBanner;