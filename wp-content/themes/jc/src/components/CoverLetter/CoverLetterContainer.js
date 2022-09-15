import React from 'react';
import styled from 'styled-components';

import CoverLetterContent from './CoverLetterContent';

const StyledCoverLetterContainer = styled.section`
  display: grid;
  align-items: center;
  grid-template-columns: none;
  grid-template-areas:
    "coverLetterWrapper";



  ${props => props.theme.media.large`
    grid-template-areas:
    ".  coverLetterWrapper";
    grid-template-columns: 2fr 4fr;
    align-items: start;
  `}
`;

const StyledCoverLetterdWrapper = styled.div`
  grid-area: coverLetterWrapper;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  

   ${props => props.theme.media.large`
     grid-template-columns: repeat(4, 1fr);
  `}
`;

const coverLetterContainer = (props) => {
  return (
    <StyledCoverLetterContainer>
      <StyledCoverLetterdWrapper>
        <CoverLetterContent data={props.data} />
      </StyledCoverLetterdWrapper>
    </StyledCoverLetterContainer>

  );
}

export default coverLetterContainer;