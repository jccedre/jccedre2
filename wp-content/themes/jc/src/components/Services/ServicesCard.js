import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import Paragraph from '../UI/Paragraph/Paragraph';
import AppIcon from '../Icons/AppIcon';
import DesktopIcon from '../Icons/DesktopIcon';
import LifeRingIcon from '../Icons/LifeRingIcon';
import PhotoIcon from '../Icons/PhotoIcon';
import WebIcon from '../Icons/WebIcon';
import CardAccent from '../UI/CardAccent/CardAccent';

const StyledServicesCard = styled(animated.div)`
  background-color: ${props => props.theme.colors.cardBackground};
  padding: 2rem 1rem;
  position: relative;

  ${props => props.theme.media.medium`
    padding: 2rem;
    max-width: 470px;
  `}

  ${props => props.theme.media.medium`
    padding: 2rem;
    max-width: 500px;
  `}
`;

const StyledTitle = styled.p`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSize.subTitle};
  font-family: ${props => props.theme.fonts.title};
  margin: 1rem 0;
`;

const StyledDescription = styled(Paragraph)`
  margin: 0;
`;

const StyledCustomCardAccent = styled(CardAccent)`
  position: absolute;
  top: -1rem;
  right: -1rem;
  max-width: 200px;

  ${props => props.theme.media.medium`
    top: -2rem;
    right: -2rem;
    max-width: 250px;
  `}
`;


const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 15}px,${y / 15}px,0)`;



const servicesCard = (props) => {
  let icon = null;
  let [initial, setIntitial] = useState(0);
  let [destination, setDestination] = useState(0);

  const [offsetAnimation, set] = useSpring(() => ({
    xy: [0, 0],
      config: {
        mass: 10,
        tension: 550,
        friction: 140
      }
    }));

    let mouseMove = ({ clientX: x, clientY: y }) => {
      let destinationValue = destination;
      set({ xy: calc(x, y) });
      setDestination(destinationValue + 1);
    };

    let mouseOut = () => {
      set({ xy: [0, 0] });
      setIntitial(initial + destination);
    };



  switch (props.icon) {
    case ('web'):
      icon = <WebIcon />;
      break;
    case ('app'):
      icon = <AppIcon />;
      break;
    case ('photography'):
      icon = <PhotoIcon />;
      break;
    case ('consulting'):
      icon = <LifeRingIcon />;
      break;
    case ('desktop'):
      icon = <DesktopIcon />;
      break;
    default:
      icon = null;
  }
  return (
    <StyledServicesCard
      onMouseMove={mouseMove}
      onMouseOut={mouseOut}
      style={{ transform: offsetAnimation.xy.to(trans1) }}
      >
      {icon}
      <StyledTitle>{props.subTitle}</StyledTitle>
      <StyledDescription
        color='gray'
        fontSize='body'
        fontFamily='body'
        content={props.description}
         />
      <StyledCustomCardAccent 
      rotateValue={destination}
       />
    </StyledServicesCard>
  );
}

export default servicesCard;