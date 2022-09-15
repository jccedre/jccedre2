import React from 'react';
import styled from 'styled-components';


import MainWrapper from '../components/MainWrapper/MainWrapper';
import HeroImageContainer from '../components/Hero/HeroImageContainer';
import SubTitle from '../components/UI/SubTitle/SubTitle';
import Title from '../components/UI/Title/Title';
import Paragraph from '../components/UI/Paragraph/Paragraph';
import Footer from '../components/Footer/Footer';
import SEO from '../components/seo';
import image404 from '../assets/images/404Image.png';

const StyledHeroContainer = styled.section`
  display: grid;
  align-items: center;
  grid-template-columns: minmax(320px, 1fr);

   ${props => props.theme.media.large`
      grid-template-columns: 2.5fr 2fr;
    `}
`;

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

const StyledHeroParagraph = styled(Paragraph)`
  
  ${props => props.theme.media.medium`
    max-width: 90%;
    margin: auto;
  `}
`;

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <>
      <SEO title='404: Not Found' />
      <MainWrapper>
        <StyledHeroContainer>
          <HeroImageContainer
            src={image404}
            alt='bitmoji avatar of Jean Carlos huddled in a corner'
            content={''}
          />
          <StyledHeroContent>
            <SubTitle content='Oh! No!!' />
            <Title content='404: Not Found' type={1} color='blueDark' />
            <StyledHeroParagraph
              content='You just hit a route that doesn&#39;t exist... the sadness.'
              color='grayDark'
              fontSize='heroParagraph'
              fontFamily='body' />
          </StyledHeroContent>
        </StyledHeroContainer>
      <Footer />
      </MainWrapper>
    </>
  )
}

export default NotFoundPage;