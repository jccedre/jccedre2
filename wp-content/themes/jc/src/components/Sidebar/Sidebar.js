import React from 'react';
import styled from 'styled-components';


const StyledSidebar = styled.nav`
  background-color: ${props => props.theme.colors.blueDark};
  min-width: 0;
  z-index: 2;
  display: none;


  ${props => props.theme.media.large`
    width: 100%;
    height: 103%;
    display: block;
  `}

`;

const sidebar = (props) => {
  return (
    <StyledSidebar>

    </StyledSidebar>
  );
}

export default sidebar;