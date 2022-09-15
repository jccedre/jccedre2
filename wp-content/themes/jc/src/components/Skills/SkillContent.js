import React from 'react';
import styled from 'styled-components';

import SkillItems from './SkillItems';
import Title from '../UI/Title/Title';
import Paragraph from '../UI/Paragraph/Paragraph';

const StyledSkillContent = styled.div`
  padding: 2rem 1rem;
  grid-area: skill;

  ${props => props.theme.media.medium`
     padding: 3rem 1rem;
  `}
`;

const StyledDescription = styled(Paragraph)`
  margin: 0 0 1rem 0;
`;


const skillContent = (props) => {
  return (
    <StyledSkillContent>
      <Title
        type='5'
        color='white'
        content={props.title} />
      <StyledDescription
        color='gray'
        fontSize='body'
        fontFamily='body'
        content={props.subTitle} />
      <SkillItems items={props.items} />
      {props.children}
    </StyledSkillContent>
  );
}

export default skillContent;