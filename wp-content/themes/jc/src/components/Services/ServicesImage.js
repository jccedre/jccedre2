import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const StyledServicesImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-height: 1000px;
`;

const servicesImage = (props) => {
  const image = getImage(props.gatsbyImage);

  return <StyledServicesImage image={image} alt={props.alt} />;
}

export default servicesImage;