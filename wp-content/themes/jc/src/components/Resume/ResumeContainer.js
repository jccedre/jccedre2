import React from 'react';
import styled from 'styled-components';

import SkillContent from '../Skills/SkillContent';
import LanguageContent from '../Languages/LanguageContent';
import ExperienceContent from '../Experiences/ExperienceContent';


const StyledResumeContainer = styled.section`
  display: grid;
  align-items: center;
  grid-template-columns: none;
  grid-template-areas:
    ".   skill"
    ".  experience";

  ${props => props.theme.media.large`
    grid-template-columns: 2fr 4fr;
    align-items: start;
  `}

  ${props => props.theme.media.xlarge`
   grid-template-areas:
    ".  skill  experience";
    grid-template-columns: 2fr 2fr 2fr;
    
  `}
`;

const resumeContainer = (props) => {
  return (
    <StyledResumeContainer>
      <SkillContent 
        title={props.skillsData.skillsTitle}
        subTitle={props.skillsData.skillsSubtitle}
        items={props.skillsData.skillsItem}>
        <LanguageContent
          title={props.skillsData.languagesTitle}
          items={props.skillsData.languageItem} />
        </SkillContent>
      <ExperienceContent
        title={props.experienceData.experienceSectionTitle}
        items={props.experienceData.experienceItem} />
    </StyledResumeContainer>
  );
}

export default resumeContainer;