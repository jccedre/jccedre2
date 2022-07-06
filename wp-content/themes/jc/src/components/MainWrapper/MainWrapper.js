import React from 'react';
import styled from 'styled-components';

const StyledMainWrapper = styled.main`
  background-color: ${props => props.theme.colors.blueDark};
`;

const mainWrapper = (props) => {
  return (
    <StyledMainWrapper>
      {props.children}
    </StyledMainWrapper>
  );
}

export default mainWrapper;