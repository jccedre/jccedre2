import React, { useEffect, useRef, useState, useMemo } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

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



const StyledSkillItem = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const StyledSkillTitle = styled.p`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.fontFamily ? props.theme.fonts[props.fontFamily] : props.theme.fonts.body};
  font-size: ${props => props.fontSize ? props.theme.fontSize[props.fontSize] : props.theme.fontSize.body};
  margin: 0 0 0.5rem 0;
`;

const StyledSkillNumber = styled.p`
color: ${props => props.theme.colors.gray};
font-size: ${props => props.fontSize ? props.theme.fontSize[props.fontSize] : props.theme.fontSize.body};
font-family: ${props => props.fontFamily ? props.theme.fonts[props.fontFamily] : props.theme.fonts.body};
margin: 0;
`;

const StyledSkillBarWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 7px;
  margin-bottom: 1.5rem;


    &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: ${props => props.theme.colors.white};
    height: 7px;
    opacity: 0.05;
    z-index: 1;
  }
`;

const StyledSkillBar = styled(animated.div)`
   position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: ${props => props.theme.colors.orange};
    height: 7px;
    z-index: 2;`;

const skillItem = (props) => {
  const refBar = useRef(false);
  const isInViewport = useIsInViewport(refBar);
  const barStyles = useSpring({
    config: {
      mass: 10,
      friction: 100,
    },
    from: {
      width: '0%',
    },
    to: {
      width: isInViewport ? props.percentage: '0%',
    }
  });
  return (
    <StyledSkillItem>
      <StyledSkillTitle>
        {props.title}
      </StyledSkillTitle>
      <StyledSkillNumber>
        {props.percentage}
      </StyledSkillNumber>
      <StyledSkillBarWrapper>
        <StyledSkillBar ref={refBar} style={barStyles} />
      </StyledSkillBarWrapper>
    </StyledSkillItem>
  );
}

export default skillItem;