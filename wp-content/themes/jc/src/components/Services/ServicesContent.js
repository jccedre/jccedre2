import React from 'react';
import styled from 'styled-components';

import ServicesPrimaryCard from './ServicesPrimaryCard';
import ServicesCards from './ServicesCards';

const StyledServicesContent = styled.div`
  padding: 2rem 1rem;
  display: grid;
  grid-auto-rows: max-content;
  justify-self: center;
  grid-auto-columns: minmax(290px, 470px);
  column-gap: 1rem;
  row-gap: 1rem;


  ${props => props.theme.media.medium`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${props => props.theme.media.xlarge`
    column-gap: 2rem;
    row-gap: 2rem;
    justify-self: flex-start;
  `}
`;

const servicesContent = (props) => {
  return (
    <StyledServicesContent>
      <ServicesPrimaryCard 
      title={props.title}
      subTitle={props.subTitle}
      tagline={props.tagline}
      description={props.description} />
      <ServicesCards items={props.servicesCards} />
    </StyledServicesContent>
  );
}

export default servicesContent;