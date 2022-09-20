import React from 'react';
import styled from 'styled-components';

const StyledCloseIcon = styled.svg`
  fill: ${props => props.theme.colors.white};
  stroke-width: 2px;
  stroke: ${props => props.theme.colors.white};
  width: 100%;
  height: 100%;
  max-width: 40px;
  max-height: 40px;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 2;
  transition: stroke 0.3s, transform 0.3s;

  &:hover,
  &:focus {
    stroke: ${props => props.theme.colors.orange};
  }

  &:active {
    stroke: ${props => props.theme.colors.orangeHover};
    transform: scale(1.2);
  }
`;

const closeIcon = (props) => {
  return (
    <StyledCloseIcon viewBox='0 0 24 24' onClick={props.clicked}>
      <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
    </StyledCloseIcon>
  );
}

export default closeIcon;