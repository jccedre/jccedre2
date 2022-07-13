import React from 'react';
import styled from 'styled-components';

const StyledServicesContent = styled.section`
  
`;

const servicesContent = (props) => {
  return (
    <StyledServicesContent>
      {props.children}
    </StyledServicesContent>
  );
}

export default servicesContent;