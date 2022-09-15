import React from 'react';
import styled from 'styled-components';


/* 
TODO: Change colors to pull from theme.
Add in hover and focus states
Add in active state
*/

const StyledButton = styled.button`
  position: relative;
  text-decoration: none;
  text-align: center;
  font-family: ${props => props.theme.fonts.subTitle};
  border: 0;  
  max-width: 165px;
  transition: background-color 0.3s, color 0.3s, transform 0.3s, opacity 0.3s;
  padding: 1.2rem 2.2rem;
  display: block;
  background: linear-gradient(120deg, #E15175, #FD9728, #E15175);
  background-size: 400% 400%;
  animation:
  ${props => props.theme.animations.gradient} 3s ease-in-out infinite;
  color: ${props => props.theme.colors.white};
  font-size: 16px;
  font-weight: 600;


  &:hover,
  &:focus {
    color: ${props => props.theme.colors.white};
    opacity: 0.9;
  }

  &:active {
    transform: scale(1.02);
  }

  &:visited {
    color: ${props => props.theme.colors.white};
  }


  ${props => props.theme.media.xlarge`
    max-width: 170px;
  `}
`;

const button = (props) => {
  return (
    <StyledButton
      className={props.className}
      onClick={props.clicked}
      key={props.id}
      text={props.text}
      download={props.download}
      href={props.href}
      as={props.as}
      target={props.target}>
      <span>
        {props.label}
      </span>
    </StyledButton>
  );
}

export default button;
