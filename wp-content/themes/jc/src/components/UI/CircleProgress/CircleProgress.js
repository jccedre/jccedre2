import React, { useEffect, useRef, useState, useMemo } from 'react';
import styled from 'styled-components';

import { circleAnimation } from '../../../styles/Animations';

const handleColorType = (colorID, props) => {
  switch (colorID) {
    case (0):
      return props.theme.colors.white;
    case (1):
      return props.theme.colors.blue;
    case (2):
      return props.theme.colors.green;
  }
}

const StyledCircleProgress = styled.svg`
	.st0 {
    fill: ${props => props.theme.colors.grayDark};
    opacity: 0.5;
    }
	.st1 {
    fill:none;
    stroke: ${props => props.theme.colors.siteBackground};
    stroke-width: 3;
    }
	.st2 {
    fill:none;
    stroke: ${props => handleColorType(props.colorID, props)};
    stroke-width: 5;
    stroke-linecap: round;
   

    animation: 
    ${props => props.inView ? circleAnimation(props.animationValue - 10) : 'none'}
    1s ease-in-out forwards;
    }
`;

const useIsInViewport = (ref) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting),
      ),
    [],
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}

const circleProgress = (props) => {
  let {
    size = 95,
    trackWidth = 5,
  } = props;

  const center = size / 2;
  const radius = center - trackWidth;
  const dashArray = 2 * Math.PI * radius;
  const refCircle = useRef(false);
  const isInViewport = useIsInViewport(refCircle);
  
  let animationValue = dashArray * (props.percentage / 100);
  animationValue = dashArray - animationValue + 30;
  
  
  return (
    <StyledCircleProgress 
    ref={refCircle}
    viewBox='0 0 95 95' 
    percentage={props.percentage} 
    animationValue={animationValue} 
    colorID={props.colorID}
    inView={isInViewport}
    >
      <path id='Background_Outer' className='st0' d='M47.5,95C21.3,95,0,73.7,0,47.5S21.3,0,47.5,0c0.7,0,1.3,0,2.3,0.1l0.3,0
	C75.3,1.2,95,22,95,47.5C95,73.7,73.7,95,47.5,95z M47.5,15C29.6,15,15,29.6,15,47.5C15,65.4,29.6,80,47.5,80
	C65.4,80,80,65.4,80,47.5c0-17.2-13.7-31.7-30.6-32.4l-0.3,0C48.5,15,48,15,47.5,15z'/>
      <circle id='Background_Inner' className='st1' cx='47.5' cy='47.5' r='40' />
      <circle 
      id='Percent_Ring' 
      className='st2'
      cx={center} 
      cy={center} 
      r={props.radius}
      strokeWidth={trackWidth}
      strokeDasharray={dashArray}
      strokeDashoffset={dashArray} />
    </StyledCircleProgress>
  );
}

export default circleProgress;