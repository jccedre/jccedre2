import React from 'react';
import styled from 'styled-components';


const StyledExperienceItem = styled.div`
  padding: 0.5rem 2rem;
  position: relative;

  &:first-child span {
    content: '';
    position: absolute;
    top: calc(1rem + 5px);
    left: calc(0.5rem + 5px);
    border-radius: 50%;
    background: ${props => props.theme.colors.white};
    width: 10px;
    height: 10px;
    opacity: 0.3;
  }

  &::before {
    content: '';
    position: absolute;
    top: 1rem;
    left: 0.5rem;
    border-radius: 50%;
    border: 2px solid ${props => props.theme.colors.white};
    width: 20px;
    height: 20px;
    opacity: 0.3;
  }

  &::after {
    content: '';
    position: absolute;
    /* circle: padding + circle height + 9px of spacing based on comp */
    top: calc(1rem + 20px + 9px);
    /* circle: padding, width and minus one of line width */
    left: calc(0.5rem + 10px - 1px);
    border: 2px solid ${props => props.theme.colors.white};
    height: 75%;
    opacity: 0.1;
  }
`;

const StyledExperienceItemInner = styled.div`
  padding: 1rem;
`;

const StyledExperienceCircle = styled.span``;

const StyledExperienceYear = styled.p`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.title};
  font-size: 1.5rem;
  margin: 0;
`;

const StyledExperienceTitle = styled.p`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.subTitle};
  font-size: 1.25rem;
  margin: 0 0 1rem 0;
`;

const StyledExperienceDescription = styled.p`
  color: ${props => props.theme.colors.gray};
  margin: 0;
  font-family: ${props => props.theme.fonts.body};
  font-size: 1rem;
`;


const experienceItem = (props) => {
  return (
    <StyledExperienceItem>
      <StyledExperienceCircle />
      <StyledExperienceItemInner>
        <StyledExperienceYear>
          {props.year}
        </StyledExperienceYear>
        <StyledExperienceTitle>
          {props.title}
        </StyledExperienceTitle>
        <StyledExperienceDescription>
          {props.description}
        </StyledExperienceDescription>
      </StyledExperienceItemInner>
    </StyledExperienceItem>
  );
}

export default experienceItem;