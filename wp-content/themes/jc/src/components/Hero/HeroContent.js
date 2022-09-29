import React from 'react';
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';

import SubTitle from '../UI/SubTitle/SubTitle';
import Title from '../UI/Title/Title';
import Paragraph from '../UI/Paragraph/Paragraph';
import HeroInfoItems from './HeroInfoItems';
import Button from '../UI/Button/Button';
import SendIcon from '../Icons/SendIcon';

const StyledHeroContent = styled.div`
 height: 100%;
 background: white;
 padding: 2rem 1rem;

 ${props => props.theme.media.large`
    display: flex;
    flex-flow: row wrap;
    align-content: center;
  `}
`;

const StyledHr = styled.hr`
  opacity: 10%;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.black};
  margin: 1rem 0;


  ${props => props.theme.media.medium`
    max-width: 90%;
    margin: 1rem auto;
  `}
`;

const StyledHeroParagraph = styled(Paragraph)`
  
  ${props => props.theme.media.medium`
    max-width: 90%;
    margin: auto;
  `}
`;


const StyledCTAContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  ${props => props.theme.media.largeSmall`
    justify-content: space-around;
    
  `}
`;

const StyledLink = styled.a`
  color: ${props => props.theme.colors.black};
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
  }

  &:active {
    transform: scale(1.04);
    color: ${props => props.theme.colors.blue};
  }

  &:visited {
    color: ${props => props.theme.colors.black};
  }

  span:first-child {
    max-width: 20px;
    width: 100%;
    height: 20px;
    margin-right: 0.5rem;
  }
`;

const heroContent = (props) => {
  return (
    <StyledHeroContent>
      <SubTitle content={props.subTitle} />
      <Title content={props.title} type={1} color='blueDark' />
      <StyledHeroParagraph 
      content={props.paragraph} 
      color='grayDark'
      fontSize='heroParagraph'
      fontFamily='body' />
      <StyledHr />
      <HeroInfoItems items={props.heroItems} />
      <StyledCTAContainer>
        <Button 
        as={'a'}
        label={props.buttonText}
        download={props.resumeFile.filename}
        href={props.resumeFile.mediaItemUrl}
        target={'_blank'} />
        <StyledLink 
        onClick={() => scrollTo('#contact')} 
        title='Contact Me Now'>
          <span><SendIcon /></span>
          <span>Contact Me Now</span>
        </StyledLink>
      </StyledCTAContainer>
    </StyledHeroContent>
  );
}

export default heroContent;