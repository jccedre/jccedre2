import React from 'react';
import styled from 'styled-components';

import LanguageItems from './LanguageItems';
import Title from '../UI/Title/Title';


const StyledLanguageContent = styled.div`
`;

const languageContent = (props) => {
  return (
    <StyledLanguageContent>
      <Title
        type='6'
        color='white'
        content={props.title} />
      <LanguageItems items={props.items} />
    </StyledLanguageContent>
  );
}

export default languageContent;