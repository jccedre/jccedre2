import React from 'react';
import styled from 'styled-components';

const StyledSliderArrow = styled.svg`
  fill: ${props => props.theme.colors.gray};
  transition: opacity 0.3s, fill 0.3s;
  transform: ${props => props.direction === 'prev' ? 'rotate(180deg)' : 'none'};
  max-width: 30px;
  width: 100%;
  margin: 0 0.5rem;

  &:hover,
  &:focus {
    fill: ${props => props.theme.colors.orange};
  }

  &:active {
    fill: ${props => props.theme.colors.green};
  }
 `;

const sliderArrow = (props) => {
  return (
    <StyledSliderArrow
      viewBox='0 0 31.5 10.6'
      className={props.className}
      onClick={props.clicked}
      direction={props.direction}>
      <polygon points='26.8,0 25.7,1 28.7,4.4 0,4.4 0,5.9 28.9,5.9 25.7,9.6 26.8,10.6 31.5,5.3 ' />
    </StyledSliderArrow>
  );
}

export default sliderArrow;
