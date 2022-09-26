import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';


const StyledHeroImage = styled(GatsbyImage)`
 width: 100%;
 height: 100%;
 object-fit: cover;
`;

const heroImage = (props) => {
  const image = getImage(props.gatsbyImage);
  
  return <StyledHeroImage image={image} alt={props.alt} />;
}

export default heroImage;