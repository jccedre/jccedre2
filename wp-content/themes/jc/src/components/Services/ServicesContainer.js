import React from 'react';
import styled from 'styled-components';

import ServicesImage from './ServicesImage';
import ServicesContent from './ServicesContent';

const StyledServicesContainer = styled.section`
  display: grid;
  align-items: center;
  grid-template-columns: minmax(320px, 1fr);
  overflow-x: hidden;


  ${props => props.theme.media.large`
    grid-template-columns: 2fr 4fr;
  `}

  ${props => props.theme.media.xlarge`
    align-items: start;
  `}
`;

const servicesContainer = (props) => {
  const servicesImage = props.data.servicesSectionImage;
  const servicesTitle = props.data.servicesSectionTitle;
  const servicesSubTitle = props.data.servicesSectionSubtitle;
  const servicesTagline = props.data.servicesSectionTagline;
  const servicesDescription = props.data.servicesSectionDescription;
  const servicesCardsArray = props.data.servicesCard;
  
  return (
    <StyledServicesContainer>
      <ServicesImage 
        src={servicesImage.mediaItemUrl}
        alt={servicesImage.altText} />
      <ServicesContent 
        title={servicesTitle}
        subTitle={servicesSubTitle}
        tagline={servicesTagline}
        description={servicesDescription}
        servicesCards={servicesCardsArray}
      />
    </StyledServicesContainer>
  );
}

export default servicesContainer;