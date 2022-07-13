import React from 'react';
import styled from 'styled-components';

import HeroImageContainer from './HeroImageContainer';
import HeroContent from './HeroContent';



const StyledHeroContainer = styled.section`
  display: grid;
  align-items: center;
  grid-template-columns: minmax(320px, 1fr);


   ${props => props.theme.media.large`
      grid-template-columns: 2.5fr 2fr;
    `}

`;

const heroContainer = (props) => {
  const heroContent = props.heroSection;
  return (
    <StyledHeroContainer>
      <HeroImageContainer 
        src={props.heroImage.node.mediaItemUrl}
        alt={props.heroImage.node.altText}
        content={heroContent.heroJobTitle}
      />
    <HeroContent 
      subTitle={heroContent.heroSubtitle}
      title={heroContent.heroTitle}
      paragraph={heroContent.heroDescription}
      heroItems={heroContent.heroInfoGenerator}
      buttonText={heroContent.heroResumeButtonText}
      resumeFile={heroContent.heroResumeFile}
    />
    </StyledHeroContainer>
  );
}

export default heroContainer;