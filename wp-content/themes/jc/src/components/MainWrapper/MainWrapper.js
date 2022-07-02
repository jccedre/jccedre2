import React from 'react';
import styled from 'styled-components';

const StyledMainWrapper = styled.main`

`;

const mainWrapper = (props) => {
  return (
    <StyledMainWrapper>
      {props.children}
    </StyledMainWrapper>
  );
}

export default mainWrapper;