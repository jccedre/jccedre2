import React from 'react';
import styled from 'styled-components';

import Paragraph from '../UI/Paragraph/Paragraph';
import AppIcon from '../Icons/AppIcon';
import DesktopIcon from '../Icons/DesktopIcon';
import LifeRingIcon from '../Icons/LifeRingIcon';
import PhotoIcon from '../Icons/PhotoIcon';
import WebIcon from '../Icons/WebIcon';
import CardAccent from '../UI/CardAccent/CardAccent';

const StyledServicesCard = styled.div`
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

const servicesCard = (props) => {
  let icon = null;

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
    <StyledServicesCard>
      {icon}
      <StyledTitle>{props.subTitle}</StyledTitle>
      <StyledDescription
        color='gray'
        fontSize='body'
        fontFamily='body'
        content={props.description}
         />
      <StyledCustomCardAccent />
    </StyledServicesCard>
  );
}

export default servicesCard;