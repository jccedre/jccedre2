import React from 'react';
import styled from 'styled-components';

const StyledServicesImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-height: 1000px;
`;

const servicesImage = (props) => {
  return <StyledServicesImage src={props.src} alt={props.alt} />;
}

export default servicesImage;