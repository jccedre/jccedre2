import React from 'react';
import styled from 'styled-components';

const StyledHeroImage = styled.img`
 width: 100%;
 height: 100%;
 object-fit: cover;
`;

const heroImage = (props) => {
  return  <StyledHeroImage src={props.src} alt={props.alt} />;
}

export default heroImage;