import React from 'react';
import styled from 'styled-components';

const StyledSubTitle = styled.p`
  color: ${props => props.theme.colors.orange};
  font-size: ${props => props.theme.fontSize.subTitle};
  font-family: ${props => props.theme.fonts.subTitle};
  margin: 0;
`;

const subTitle = (props) => {
  return (
    <StyledSubTitle>
      {props.content}
    </StyledSubTitle>
  );
}

export default subTitle;