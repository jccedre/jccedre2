import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import MainWrapper from '../components/MainWrapper/MainWrapper';
import Footer from '../components/Footer/Footer';
import HeroContainer from '../components/Hero/HeroContainer';
import ServicesContainer from '../components/Services/ServicesContainer';

const StyledDiv = styled.div`
  height: 1200px;
  width: 100%;

`;

class Home extends Component {
  render() {
    const data = this.props.data;
    const defaultPath = data.allWpPage.edges[0].node;
    const heroImage = defaultPath.featuredImage;
    const heroSection = defaultPath.homepage.heroSection;
    const servicesSection = defaultPath.homepage.servicesSection;
    const statsSection = defaultPath.homepage.statsSection;
    const skillsSection = defaultPath.homepage.skillsSection;
    const experienceSection = defaultPath.homepage.experienceSection;
    const portfolioSection = defaultPath.homepage.portfolioSection;
    const aboutMeSection = defaultPath.homepage.aboutMeSection;
    const contactSection = defaultPath.homepage.contactSection;

    console.log(servicesSection)
    
    return (
      <Fragment>
        <SEO title='Home' />
        <MainWrapper>
          <HeroContainer 
          heroImage={heroImage} 
          heroSection={heroSection} />
          <ServicesContainer data={servicesSection} />
          <StyledDiv />
        </MainWrapper>
        <Footer />
      </Fragment>      
    );
  }
}

export default Home;


export const frontPageQuery = graphql`
query allWpFrontPage {
  allWpPage(filter: {isFrontPage: {eq: true}}) {
    edges {
      node {
        id
        content
        featuredImage {
          node {
            altText
            mediaItemUrl
            title
          }
        }
        homepage {
          aboutMeSection {
            aboutMeDescription
            aboutMeSubtitle
            aboutMeTagline
            aboutMeTitle
            fieldGroupName
          }
          contactSection {
            contactDescription
            contactEmail
            contactName
            contactPhone
            contactRole
            contactTitle
            fieldGroupName
            socialMedia {
              fieldGroupName
              socialMediaItemLink
              socialMediaItemTitle
            }
            socialMediaTitle
          }
          experienceSection {
            experienceItem {
              experienceItemDescription
              experienceItemTitle
              experienceItemYear
              fieldGroupName
            }
            experienceSectionTitle
            fieldGroupName
          }
          fieldGroupName
          heroSection {
            fieldGroupName
            heroDescription
            heroEmailLink
            heroResumeButtonText
            heroSubtitle
            heroTitle
            heroJobTitle
            heroInfoGenerator {
              fieldGroupName
              heroInfoItemSubtitle
              heroInfoItemTitle
            }
            heroResumeFile {
              mediaItemUrl
              filename
            }
          }
          portfolioSection {
            fieldGroupName
            portfolioSectionSubtitle
            portfolioSectionTitle
          }
          servicesSection {
            fieldGroupName
            servicesCard {
              fieldGroupName
              servicesCardIcon
              servicesCardTitle
              servicesDescription
            }
            servicesSectionDescription
            servicesSectionSubtitle
            servicesSectionTagline
            servicesSectionTitle
            servicesSectionImage {
              altText
              mediaItemUrl
            }
          }
          skillsSection {
            fieldGroupName
            languageItem {
              fieldGroupName
              languageItemPercentage
              languageItemSubtitle
              languageItemTitle
            }
            languagesTitle
            skillsItem {
              fieldGroupName
              skillItemPercentage
              skillItemTitle
            }
            skillsSubtitle
            skillsTitle
          }
          statsSection {
            fieldGroupName
            statsNumber
            statsTitle
          }
        }
        slug
        template {
          templateName
          ... on WpDefaultTemplate {
            templateName
          }
        }
        title
      }
    }
  }
}
`;

