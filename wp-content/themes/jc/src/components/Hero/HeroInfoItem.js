import React from 'react';
import styled from 'styled-components';


const StyledHeroInfoItem = styled.div`
  


  ${props => props.theme.media.medium`
    margin: 0 1rem;
  
  `}
`;


const StyledHeroInfoItemTitle = styled.p`
  font-family: ${props => props.theme.fonts.subTitle};
  color: ${props => props.theme.colors.gray};
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const StyledHeroInfoItemSubTitle = styled.p`
  font-family: ${props => props.theme.fonts.subTitle};
  color: ${props => props.theme.colors.black};
  font-size: 1.25rem;
  margin: 0.5rem 0;
  font-weight: 500;
`;


const heroInfoItem = (props) => {
  return (
    <StyledHeroInfoItem>
      <StyledHeroInfoItemTitle>{props.title}</StyledHeroInfoItemTitle>
      <StyledHeroInfoItemSubTitle>{props.subTitle}</StyledHeroInfoItemSubTitle>
    </StyledHeroInfoItem>
  );
}

export default heroInfoItem;