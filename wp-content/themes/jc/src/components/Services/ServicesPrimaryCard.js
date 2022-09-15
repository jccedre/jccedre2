import React from 'react';
import styled from 'styled-components';

import SubTitle from '../UI/SubTitle/SubTitle';
import Title from '../UI/Title/Title';
import Paragraph from '../UI/Paragraph/Paragraph';


const StyledServicesPrimaryCard = styled.div`
  ${props => props.theme.media.medium`
    padding: 2rem;
    max-width: 500px;
  `}
`;

const StyledTagline = styled(Paragraph)`
  margin: 1rem 0;
`;

const StyledDescription = styled(Paragraph)`
  margin: 0;
`;



const servicesPrimaryCard = (props) => {
  return (
    <StyledServicesPrimaryCard>
      <SubTitle content={props.subTitle} />
      <Title 
      type='5'
      color='white'
      content={props.title} />
      <StyledTagline 
      color='white'
      fontSize='body'
      fontFamily='subTitle'
      content={props.tagline} />
      <StyledDescription 
        color='gray'
        fontSize='body'
        fontFamily='body'
        content={props.description} />

    </StyledServicesPrimaryCard>
  );
}

export default servicesPrimaryCard;