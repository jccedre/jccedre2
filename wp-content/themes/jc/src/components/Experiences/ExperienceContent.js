import React from 'react';
import styled from 'styled-components';

import Title from '../UI/Title/Title';
import ExperienceItems from './ExperienceItems';


const StyledExperienceContent = styled.div`
  padding: 2rem 1rem;
  grid-area: experience;

  ${props => props.theme.media.medium`
     padding: 3rem 1rem;
  `}
`;

const experienceContent = (props) => {
  return (
    <StyledExperienceContent>
      <Title
        type='5'
        color='white'
        content={props.title} />
      <ExperienceItems items={props.items} />
    </StyledExperienceContent>
  );
}

export default experienceContent;