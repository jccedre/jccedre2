import React from 'react';
import styled from 'styled-components';

import StatsCards from './StatsCards';

const StyledStatsContainer = styled.section`
  display: grid;
  align-items: center;
  grid-template-columns: none;
  
  

  ${props => props.theme.media.large`
    grid-template-columns: 2fr 4fr;
    align-items: start;
  `}

  ${props => props.theme.media.xlarge`
   
  `}
`;

const StyledStatsCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  

   ${props => props.theme.media.large`
     grid-template-columns: repeat(4, 1fr);
  `}
`;

const statsContainer = (props) => {
  return (
    <StyledStatsContainer>
      <div></div>
      <StyledStatsCardWrapper>
        <StatsCards items={props.data} />
      </StyledStatsCardWrapper>
    </StyledStatsContainer>
  );
}

export default statsContainer;