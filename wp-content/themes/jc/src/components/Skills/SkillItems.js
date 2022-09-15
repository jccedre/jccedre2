import React from 'react';
import styled from 'styled-components';

import SkillItem from './SkillItem';

const StyledSkillItems = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const skillItems = (props) => {
  return (
    <StyledSkillItems>
    {props.items.map((item, key) => (
      <SkillItem 
        key={key}
        title={item.skillItemTitle}
        percentage={item.skillItemPercentage}
      />
    ))}
    </StyledSkillItems>
  );
}

export default skillItems;