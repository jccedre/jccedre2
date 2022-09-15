import React from 'react';
import styled from 'styled-components';

import ContactContent from './ContactContent';

const StyledContactContainer = styled.section`
  display: grid;
  align-items: center;
  grid-template-columns: none;
  grid-template-areas:
    "contactWrapper";



  ${props => props.theme.media.large`
    grid-template-areas:
    ".  contactWrapper";
    grid-template-columns: 2fr 4fr;
    align-items: start;
  `}
`;

const StyledCoverLetterdWrapper = styled.div`
  grid-area: contactWrapper;
  
`;


const contactContainer = (props) => {
  return (
    <StyledContactContainer id='contact'>
      <StyledCoverLetterdWrapper>
        <ContactContent data={props.data} />
      </StyledCoverLetterdWrapper>
    </StyledContactContainer>
  );
}

export default contactContainer;