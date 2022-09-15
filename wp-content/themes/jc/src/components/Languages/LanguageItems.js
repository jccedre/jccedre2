import React from 'react';
import styled from 'styled-components';

import LanguageItem from './LanguageItem';

const StyledLanguageItems = styled.div`
  display: flex;
  flex-flow: row wrap;
  text-align: center;
  justify-content: center;

  ${props => props.theme.media.large`
    justify-content: flex-start;
  `}
`;

const languageItems = (props) => {
  let colorID = 0;
  return (
    <StyledLanguageItems>
      {props.items.map((item, key) => {
        if (colorID > 1) {
          colorID = 0;
        } else {
          colorID++;
        }
        return (
          <LanguageItem
            key={key}
            title={item.languageItemTitle}
            subtitle={item.languageItemSubtitle}
            percentage={item.languageItemPercentage}
            colorID={colorID} />
        )
      })}
    </StyledLanguageItems>
  );
}

export default languageItems;