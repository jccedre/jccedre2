import React from 'react';
import styled from 'styled-components';

const StyledMainWrapper = styled.main`
  background-color: ${props => props.theme.colors.siteBackground};
  width: 100%;
  min-width: 0;
`;

const mainWrapper = (props) => {
  return (
    <StyledMainWrapper>
      {props.children}
    </StyledMainWrapper>
  );
}

export default mainWrapper;