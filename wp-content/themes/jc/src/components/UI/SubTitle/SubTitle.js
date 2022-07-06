import React from 'react';
import styled from 'styled-components';

const StyledSubTitle = styled.p`
  color: ${props => props.theme.colors.orange};
  font-size: 1.5rem;
  font-family: ${props => props.theme.fonts.subTitle};
`;

const subTitle = (props) => {
  return (
    <StyledSubTitle>
      {props.content}
    </StyledSubTitle>
  );
}

export default subTitle;