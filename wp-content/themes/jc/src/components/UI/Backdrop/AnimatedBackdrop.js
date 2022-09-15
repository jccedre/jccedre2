import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';


const StyledAnimatedBackdrop = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.color ?
  props.theme.colors.siteBackground : props.theme.colors.siteBackground};
  z-index: ${props => props.zindex ? props.zindex : '-1'};
  display: inline;
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  opacity: 0;
`;

const animatedBackdrop = React.memo((props) => {

  return (
    <StyledAnimatedBackdrop
      zindex={props.zindex}
      onClick={props.clicked}
      color={props.color}
      style={props.style}
      show={props.show ? 1 : 0} />
  );
});

export default animatedBackdrop;
