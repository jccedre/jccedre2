import React, { useEffect, useRef, useState, useMemo } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const handleColorType = (colorid, props) => {
  switch (colorid) {
    case (0):
      return props.theme.colors.green;
    case (1):
      return props.theme.colors.blue;
    case (2):
      return props.theme.colors.orange;
  }
}

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

const StyledStatsCard = styled.div` 
  background-color: 
  ${props => (props.id % 3 === 0 ? 
  props.theme.colors.cardBackground : 
  props.theme.colors.cardBackgroundDark)};
 
  width: 100%;
  text-align: center;
  padding: 1rem;
 

  ${props => props.theme.media.large`
    background-color: 
    ${props => (props.id % 2 === 0 ?
      props.theme.colors.cardBackground :
      props.theme.colors.cardBackgroundDark)};
  `}
`;

const StyledStatsNumberWrapper = styled(animated.p)`
  font-family: ${props => props.theme.fonts.title};
  font-size: 4rem;
  margin: 0;
  color: ${props => handleColorType(props.colorid, props)};
`;

const StyledStatsNumber = styled(animated.span)`

`;

const StyledStatsCharacter = styled.span`

`;

const StyledStatsTitle = styled.p`
  margin: 0;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.body};
  font-size: 1.25rem;
`;

const statsCard = (props) => {
  const refCard = useRef(false);
  const isInViewport1 = useIsInViewport(refCard);
  const numberValue = parseInt(props.number.replace(/\D/g, ''));
  const numberCharacter = props.number.replace(/\d/g, '');
  const { number } = useSpring({
    number: isInViewport1 ? numberValue : 0,
    config: {
      mass: 20,
      tension: 100,
      friction: 140,
    }
  });
  
  return (
    <StyledStatsCard id={props.id} ref={refCard}>
      <StyledStatsNumberWrapper colorid={props.colorID}>
        <StyledStatsNumber>
          {number.to(x => x.toFixed(0))}
        </StyledStatsNumber>
        <StyledStatsCharacter>
          {numberCharacter}
        </StyledStatsCharacter>
      </StyledStatsNumberWrapper>
      <StyledStatsTitle>
        {props.title}
      </StyledStatsTitle>
    </StyledStatsCard>
  );
}

export default statsCard;