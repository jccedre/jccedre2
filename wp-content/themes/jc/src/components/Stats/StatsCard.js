import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/Colors';

const handleColorType = (colorID, props) => {
  switch (colorID) {
    case (0):
      return props.theme.colors.green;
    case (1):
      return props.theme.colors.blue;
    case (2):
      return props.theme.colors.orange;
  }
}

const StyledStatsCard = styled.div` 
 background-color: 
 ${props => (props.id % 3 === 0 ? 
 props.theme.colors.cardBackground : 
 props.theme.colors.cardBackgroundDark)};
 
 width: 100%;
 text-align: center;
 padding: 1rem;
 


${props => props.theme.media.medium`

`}

 ${props => props.theme.media.large`
  background-color: 
  ${props => (props.id % 2 === 0 ?
    props.theme.colors.cardBackground :
    props.theme.colors.cardBackgroundDark)};

 `}
 
`;

const StyledStatsNumber = styled.p`
  font-family: ${props => props.theme.fonts.title};
  font-size: 4rem;
  margin: 0;
  color: ${props => handleColorType(props.colorID, props)};
  
`;

const StyledStatsTitle = styled.p`
  margin: 0;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.body};
  font-size: 1.25rem;
`;

const statsCard = (props) => {
  return (
    <StyledStatsCard id={props.id}>
      <StyledStatsNumber colorID={props.colorID}>
        {props.number}
      </StyledStatsNumber>
      <StyledStatsTitle>
        {props.title}
      </StyledStatsTitle>
    </StyledStatsCard>
  );
}

export default statsCard;