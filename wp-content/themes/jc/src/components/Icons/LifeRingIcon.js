import React from 'react';
import styled from 'styled-components';


const StyledLifeRingIcon = styled.svg`
  max-width: 70px;
  width: 100%;
  stroke: ${props => props.theme.colors.green};
`;

const lifeRingIcon = (props) => {
  return (
    <StyledLifeRingIcon xmlns="http://www.w3.org/2000/svg" className="lifeRingIcon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </StyledLifeRingIcon>
  );
}

export default lifeRingIcon;