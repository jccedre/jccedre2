import React from 'react';
import styled from 'styled-components';

import SubTitle from '../UI/SubTitle/SubTitle';
import Title from '../UI/Title/Title';

const StyledHeroContent = styled.div`
 width: 100%;
 height: 100%;
 background: white;
 
`;

const heroContent = (props) => {
  return (
    <StyledHeroContent>
      <SubTitle content={props.subTitle} />
      <Title content={props.title} type={1} color="blueDark" />
    </StyledHeroContent>
  );
}

export default heroContent;