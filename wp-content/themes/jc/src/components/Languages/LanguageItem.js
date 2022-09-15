import React from 'react';
import styled from 'styled-components';

import CircleProgress from '../UI/CircleProgress/CircleProgress';


const StyledLanguageItem = styled.div`

`;

const StyledLanguageCircle = styled.div`
  position: relative;
	width: 65px;
	margin: 1em;
	transform: rotate(-90deg);

   ${props => props.theme.media.medium`
     width: 95px;
  `}
`;

const StyledLanguageNumber = styled.span`
  color: ${props => props.theme.colors.gray};
  font-family: ${props => props.theme.fonts.body};
  font-size: 1rem;
  margin: 0;
  position: absolute;
	top: 50%;
	left: 50%;
	padding: 0.25em 0.5em;
	border-radius: 0.25em;
	transform: translate(-50%, -50%) rotate(90deg);

  ${props => props.theme.media.medium`
     font-size: 1.1rem;
  `}
`;

const StyledLanguageTitle = styled.p`
  color: ${props => props.theme.colors.white};
  font-size: 1.25rem;
  margin: 0;
`;

const StyledLanguageSubtitle = styled.p`
  color: ${props => props.theme.colors.gray};
  font-family: ${props => props.theme.fonts.body};
  font-size: 1.125rem;
  margin: 0;
`;

const languageItem = (props) => {
  const strippedPercentage = props.percentage.replace('%', '');
  return (
    <StyledLanguageItem>
      <StyledLanguageCircle>
        <CircleProgress
          radius={40}
          percentage={strippedPercentage}
          colorID={props.colorID} />
        <StyledLanguageNumber>
          {props.percentage}
        </StyledLanguageNumber>
      </StyledLanguageCircle>
      <StyledLanguageTitle>
        {props.title}
      </StyledLanguageTitle>
      <StyledLanguageSubtitle>
        {props.subtitle}
      </StyledLanguageSubtitle>
    </StyledLanguageItem>
  );
}

export default languageItem;