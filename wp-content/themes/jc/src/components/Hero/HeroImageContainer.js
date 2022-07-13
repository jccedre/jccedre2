import React from 'react';
import styled from 'styled-components';

import HeroImage from './HeroImage';
import HeroBanner from './HeroBanner';


const StyledHeroImageContainer = styled.div`
  display: block;
  position: relative;
  overflow: hidden;
  height: 100%;
`;

const heroImageContainer = (props) => {
  return (
    <StyledHeroImageContainer>
      <HeroImage
        src={props.src}
        alt={props.alt} />
      <HeroBanner content={props.content} />
    </StyledHeroImageContainer>
  );
}

export default heroImageContainer;