import React from 'react';
import styled from 'styled-components';

import HeroInfoItem from './HeroInfoItem';


const StyledHeroInfoItems = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex-grow: 1;
  width: 100%;
  justify-content: space-between;


  ${props => props.theme.media.medium`
    justify-content: center;
  
  `}
  
`;


const heroInfoItems = (props) => {
  return (
    <StyledHeroInfoItems>
      {props.items.map((item, key) => (
        <HeroInfoItem
          key={key}
          title={item.heroInfoItemTitle}
          subTitle={item.heroInfoItemSubtitle}
          />
      ))}
    </StyledHeroInfoItems>
  );
}

export default heroInfoItems;