import React from 'react';
import styled from 'styled-components';

import SubTitle from '../UI/SubTitle/SubTitle';
import Title from '../UI/Title/Title';
import Paragraph from '../UI/Paragraph/Paragraph';
import CardAccent from '../UI/CardAccent/CardAccent';

const StyledCoverLetterContent = styled.div`
  padding: 2rem 1rem;
  grid-area: skill;
  background-color: ${props => props.theme.colors.cardBackground};
  margin: 1rem;
  position: relative;

  ${props => props.theme.media.medium`
     padding: 3rem;
     margin: 3rem 1rem;
  `}

  ${props => props.theme.media.large`
     padding: 3rem;
     margin: 4rem;
  `}
`;

const StyledTagline = styled(Paragraph)`
  margin: 1rem 0;
`;

const StyledDescription = styled(Paragraph)`
  margin: 0 0 1rem 0;
`;

const StyledCustomCardAccent = styled(CardAccent)`
  position: absolute;
  top: -1rem;
  right: -1rem;
  max-width: 400px;

  ${props => props.theme.media.medium`
    top: -2rem;
    right: -2rem;
    max-width: 600px;
  `}
`;


const coverLetterConent = (props) => {
  return (
    <StyledCoverLetterContent>
      <SubTitle content={props.data.aboutMeSubtitle} />
      <Title
        type='5'
        color='white'
        content={props.data.aboutMeTitle} />
      <StyledTagline
        color='white'
        fontSize='body'
        fontFamily='subTitle'
        content={props.data.aboutMeTagline} />
      <StyledDescription
        color='gray'
        fontSize='body'
        fontFamily='body'
        content={props.data.aboutMeDescription} />
      <StyledCustomCardAccent />
    </StyledCoverLetterContent>
  );
}

export default coverLetterConent;