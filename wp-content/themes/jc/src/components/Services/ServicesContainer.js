import React from 'react';
import styled from 'styled-components';

import ServicesImage from './ServicesImage';

const StyledServicesContainer = styled.section`
  ${'' /* max-width: ${props => props.theme.container} */}
  display: grid;
  align-items: center;
  grid-template-columns: minmax(320px, 1fr);


  ${props => props.theme.media.large`
    grid-template-columns: 2.5fr 2fr;
  `}
`;

const servicesContainer = (props) => {
  const servicesImage = props.data.servicesSectionImage;
  return (
    <StyledServicesContainer>
      <ServicesImage 
      src={props.data.servicesSectionImage.mediaItemUrl}
      alt={props.data.servicesSectionImage.altText} />
    </StyledServicesContainer>
  );
}

export default servicesContainer;