import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';


const StyledCardAccent = styled(animated.svg)`
  max-width: 320px;
  width: 100%;
.st0 {
  fill: ${props => props.theme.colors.white};
  opacity: 0.03;
  }
`;

const cardAccent = (props) => {
  const styles = useSpring({
    from: {
      rotate: 0,
      
    },
    to: {
      rotate: props.rotateValue,
    },
    config: {
      mass: 5,
      tension: 10,
      friction: 10
    }
  });

  return (
    <StyledCardAccent 
    viewBox='0 0 325.5 341.1' 
    className={props.className}
    style={styles}>
      <path id='vector_BG_object' className='st0' d='M97.1,0L0,81.5l81.5,97.1L38.1,297.8l119.2,43.4L200.6,222l124.9-22l-22-124.9l-124.9,22
	L97.1,0z'/>
    </StyledCardAccent>
  );
}

export default cardAccent;