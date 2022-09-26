import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';


const StyledPortfolioItem = styled(GatsbyImage)`
  transition: box-shadow 1s;
  &:hover {
    z-index: 200;
    box-shadow: 0px 0px 21px 0px rgba(59,197,207,0.59);
  }
`;

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 200}px,${y / 15}px,0)`;


const portfolioItem = (props) => {
  const image = getImage(props.gatsbyImage);
  const [offsetAnimation, set] = useSpring(() => ({
    xy: [0, 0],
    config: {
      mass: 10,
      tension: 550,
      friction: 140
    }
  }));
  
  let mouseMove = ({ clientX: x, clientY: y }) => {
    set({ xy: calc(x, y) });
  };

  let mouseOut = () => {
    set({ xy: [0, 0] });
  };
  return (
    <animated.div
      className={props.className + ' animated__wrapper'}  
      onClick={props.portfolioItemClick}
      onMouseMove={mouseMove}
      onMouseOut={mouseOut}
      style={{ transform: offsetAnimation.xy.to(trans1) }}
      >
        <StyledPortfolioItem
          image={image}
          alt={props.altText}
        />
    </animated.div>
  );
}

export default portfolioItem;