import React, { Component, Fragment } from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import MainWrapper from '../components/MainWrapper/MainWrapper';
import Footer from '../components/Footer/Footer';
import HeroContainer from '../components/Hero/HeroContainer';



class Home extends Component {
  render() {
    const data = this.props.data;
    const heroImage = data.allWpPage.edges[0].node.featuredImage;
    const heroSection = data.allWpPage.edges[0].node.homepage.heroSection;
    
    return (
      <Fragment>
        <SEO title='Home' />
        <MainWrapper>
          <HeroContainer 
          heroImage={heroImage} 
          heroSection={heroSection} />
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
            heroJobCountry
            heroJobExperience
            heroJobTitle
            heroResumeButtonText
            heroSubtitle
            heroTitle
            heroResumeFile {
              mediaItemUrl
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

