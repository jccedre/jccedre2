import React from 'react';
import styled from 'styled-components';


const StyledDesktopIcon = styled.svg`
  max-width: 70px;
  width: 100%;
.st0 {
  fill: ${props => props.theme.colors.green};
  }
`;

const desktopIcon = (props) => {
  return (
    <StyledDesktopIcon viewBox="0 0 70 64.9">
      <path id="Vector" className="st0" d="M64.9,0H5.1C2.3,0,0,2.3,0,5.1v45.1c0,2.8,2.3,5.1,5.1,5.1H27l-1.2,4.3c-0.6,1.8-2.3,3.1-4.2,3.2
	h-7.7c-0.6,0-1,0.5-1,1c0,0.6,0.5,1,1,1h42.4c0.6,0,1-0.5,1-1s-0.5-1-1-1l0,0h-7.7c-1.9-0.1-3.6-1.4-4.2-3.2L43,55.4h21.9
	c2.8,0,5.1-2.3,5.1-5.1V5.1C70,2.3,67.7,0,64.9,0z M5.1,2.1h59.7c1.7,0,3.1,1.4,3.1,3.1V41H2.1V5.1C2.1,3.4,3.4,2.1,5.1,2.1z
	 M42.3,60.3c0.3,1,0.8,1.9,1.6,2.6H26.2c0.7-0.7,1.3-1.6,1.6-2.6l1.4-4.9h11.7L42.3,60.3z M64.9,53.3H5.1c-1.7,0-3.1-1.4-3.1-3.1
	v-7.2H68v7.2C67.9,51.9,66.6,53.3,64.9,53.3z"/>
      <path id="Vector-2" className="st0" d="M5.1,39h59.7c0.6,0,1-0.5,1-1c0,0,0,0,0,0V5.1c0-0.6-0.5-1-1-1c0,0,0,0,0,0H5.1c-0.6,0-1,0.5-1,1
	v14.4c0,0.6,0.5,1,1,1s1-0.5,1-1V6.2h57.7v30.8H6.2V23.6c0-0.6-0.5-1-1-1s-1,0.5-1,1v14.4C4.1,38.5,4.6,39,5.1,39z"/>
      <path id="Vector-3" className="st0" d="M35,45.1c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1
	C38.1,46.5,36.7,45.1,35,45.1z M35,49.2c-0.6,0-1-0.5-1-1c0-0.6,0.5-1,1-1c0.6,0,1,0.5,1,1c0,0,0,0,0,0C36,48.8,35.6,49.2,35,49.2z"/>
    </StyledDesktopIcon>
  );
}

export default desktopIcon;