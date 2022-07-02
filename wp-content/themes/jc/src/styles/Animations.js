/*
 * App Animations
 */
import { keyframes } from 'styled-components';

const spinnerAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;


const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const moveProgress = keyframes`
  0% {
    background-position: 0 0
  }

  100% {
    background-position: 50px 50px;
  }
`;

const animations = {
  spinnerAnimation: spinnerAnimation,
  fadeIn: fadeIn,
  moveProgress: moveProgress,
}

export default animations;
