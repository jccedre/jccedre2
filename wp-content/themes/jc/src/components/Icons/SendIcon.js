import React from 'react';
import styled from 'styled-components';


const StyledSendIcon = styled.svg`
  max-width: 20px;
  width: 100%;
.st0 {
  fill: ${props => props.theme.colors.orange};
  }
`;

const sendIcon = (props) => {
  return (
    <StyledSendIcon viewBox="0 0 22 22">
      <path className="st0" d="M22,0.9c0-0.1,0-0.2-0.1-0.3c0,0,0-0.1,0-0.1c0-0.1-0.1-0.2-0.2-0.3c-0.1-0.1-0.2-0.1-0.3-0.2c0,0-0.1,0-0.1,0
      c-0.1,0-0.2,0-0.3-0.1c0,0,0,0-0.1,0c-0.1,0-0.2,0-0.3,0.1l-20,7C0.3,7.2,0,7.5,0,8c0,0.4,0.2,0.8,0.6,1l8.6,3.8l3.8,8.6
      c0.2,0.4,0.5,0.6,0.9,0.6c0,0,0,0,0,0c0.4,0,0.8-0.3,0.9-0.7l7-20C22,1.2,22,1.1,22,0.9C22,1,22,1,22,0.9z M17.2,3.4l-7.4,7.4
      L3.7,8.1L17.2,3.4z M13.9,18.3l-2.7-6.1l7.4-7.4L13.9,18.3z"/>
    </StyledSendIcon>
  );
}

export default sendIcon;