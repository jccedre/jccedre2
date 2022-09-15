import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import SubTitle from '../UI/SubTitle/SubTitle';
import Title from '../UI/Title/Title';
import CardAccent from '../UI/CardAccent/CardAccent';
import SendIcon from '../Icons/SendIcon';


const StyledPortfolioModalItem = styled.div`
   position: relative;
   background-color: ${props => props.theme.colors.cardBackground};
   padding: 2.5rem 1rem;
   display: grid;
   grid-template-columns: none;

   ${props => props.theme.media.medium`
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
   `}
`;

const StyledPortfolioPrimary = styled(animated.div)`

`;

const StyledPortfolioSecondary = styled(animated.div)`
  z-index: 2;
`;

const StyledPortfolioImage = styled.img`
  margin: 0 0 1.5rem 0;
`;

const StyledDescription = styled.div`
  margin: 0 0 1rem 0;
  color: ${props => props.theme.colors.gray};
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSize.body};
`;

const StyledCustomCardAccent = styled(CardAccent)`
  position: absolute;
  top: -1rem;
  right: -1rem;
  max-width: 400px;

  ${props => props.theme.media.medium`
    top: -2rem;
    right: -2rem;
    max-width: 600px;
  `}
`;

const StyledTechStackList = styled.ul`
  list-style: none;
  color: ${props => props.theme.colors.gray};
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSize.body};
  padding: 0;
  margin: 0;
`;

const StyledTechStackItem = styled.li`
  margin: 0.5rem 0;
`;

const StyledLink = styled.a`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.body};
  font-weight: 500;
  font-size: 1.25rem;
  text-decoration: none;
  transition: color 0.3s, transform 0.3s;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.02);
    color: ${props => props.theme.colors.gray};
  }

  &:active {
    transform: scale(1.04);
    color: ${props => props.theme.colors.blue};
  }

  &:visited {
    color: ${props => props.theme.colors.white};
  }

  span:first-child {
    max-width: 20px;
    width: 100%;
    height: 20px;
    margin-right: 0.5rem;
  }
`;






const portfolioModalItem = (props) => {

  let data = props.data[0].node || {};
  let content = {};
  let secondaryMobileStyles = {};
  let primaryMobileStyles = {};

  if (props.isDesktop) {
     secondaryMobileStyles = useSpring({
      delay: 200,
      config: {
        mass: 10,
        friction: 60,
      },
      to: {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)',
      },
      from: {
        opacity: 0,
        transform: 'translate3d(0, 50%, 0)',
      }
    });

    primaryMobileStyles = useSpring({
      delay: 200,
      config: {
        mass: 10,
        friction: 60,
      },
      to: {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)',
      },
      from: {
        opacity: 0,
        transform: 'translate3d(0, 50%, 0)',
      }
    });

  } else {
     secondaryMobileStyles = useSpring({
      delay: 200,
      config: {
        mass: 10,
        friction: 60,
      },
      to: {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)',
      },
      from: {
        opacity: 0,
        transform: 'translate3d(-100%, 0, 0)',
      }
    });

     primaryMobileStyles = useSpring({
      delay: 200,
      config: {
        mass: 10,
        friction: 60,
      },
      to: {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)',
      },
      from: {
        opacity: 0,
        transform: 'translate3d(100%, 0, 0)',
      }
    });
  }

  

  if (props.data) {
    content = (
      <>
        <StyledPortfolioPrimary style={primaryMobileStyles}>
          <StyledPortfolioImage
            src={data.featuredImage.node.mediaItemUrl}
            alt={data.featuredImage.node.altText} />
          <SubTitle content='Project' />
          <Title
            type='5'
            color='white'
            content={data.title} />
          <StyledDescription dangerouslySetInnerHTML={{__html: data.content}}/>
        </StyledPortfolioPrimary>
        <StyledPortfolioSecondary style={secondaryMobileStyles}>
          <Title
            type='6'
            color='white'
            content='Tech Stack' />
          <StyledTechStackList>
            {data.categories.nodes.map((item, index) => (
              <StyledTechStackItem key={index}>
                {item.name}
              </StyledTechStackItem>
            ))}
          </StyledTechStackList>
          <StyledLink
            href={data.portfolioInfo.portfolioLink}
            target='_blank'>
            <span><SendIcon /></span>
            <span>Check it Out!</span>
          </StyledLink>
        </StyledPortfolioSecondary>
        <StyledCustomCardAccent />
      </>
    );
  }
  return (
    <StyledPortfolioModalItem>
      {content}
    </StyledPortfolioModalItem>
  );
}

export default portfolioModalItem;