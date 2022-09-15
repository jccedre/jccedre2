import React from 'react';
import styled from 'styled-components';

import ExperienceItem from './ExperienceItem';


const StyledExperienceItems = styled.div`

`;

const experienceItems = (props) => {
  return (
    <StyledExperienceItems>
    {props.items.map((item, key) => (
      <ExperienceItem
        key={key}
        year={item.experienceItemYear}
        title={item.experienceItemTitle}
        description={item.experienceItemDescription} />
    ))}

    </StyledExperienceItems>
  );
}

export default experienceItems;