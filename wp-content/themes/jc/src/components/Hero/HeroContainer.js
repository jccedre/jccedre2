import React from 'react';
import styled from 'styled-components';

import HeroImage from './HeroImage';
import HeroContent from './HeroContent';


const StyledHeroContainer = styled.section`
  display: grid;
  grid-template-columns: 2.5fr 2fr;
`;

const heroContainer = (props) => {
  const heroContent = props.heroSection;
  console.log(heroContent)
  return (
    <StyledHeroContainer>
    <HeroImage 
    src={props.heroImage.node.mediaItemUrl} 
    alt={props.heroImage.node.altText} />
    <HeroContent 
      subTitle={heroContent.heroSubtitle}
      title={heroContent.heroTitle}
    />
    </StyledHeroContainer>
  );
}

export default heroContainer;