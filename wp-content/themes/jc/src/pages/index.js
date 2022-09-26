import React, { Component, Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import MainWrapper from '../components/MainWrapper/MainWrapper';
import Footer from '../components/Footer/Footer';
import HeroContainer from '../components/Hero/HeroContainer';
import ServicesContainer from '../components/Services/ServicesContainer';
import StatsContainer from '../components/Stats/StatsContainer';
import ResumeContainer from '../components/Resume/ResumeContainer';
import PortfolioContainer from '../components/Portfolio/PortfolioContainer';
import CoverLetterContainer from '../components/CoverLetter/CoverLetterContainer';
import ContactContainer from '../components/Contact/ContactContainer';
import Modal from '../components/UI/Modal/Modal';
import PortfolioModalItem from '../components/Portfolio/PortfolioModalItem';
import CloseIcon from '../components/Icons/CloseIcon';

const GlobalStyle = createGlobalStyle`
  html,body {
    overflow: ${props => props.overflow ? 'hidden': 'initial'} !important;
  }
`;

class Home extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      modalItemID: null,
      isMobile: false,
      isDesktop: true,
    }
  }

  componentDidMount() {
    this.resizeHandler();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.resizeHandler);
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.resizeHandler);
    }
  }

  resizeHandler = () => {
    this.setState({
      isMobile: window.innerWidth <= 767,
      isDesktop: window.innerWidth >= 768,
    });
  }

  handlePortoflioItemClick = (itemID, event) => {
    this.setState({
      modalItemID: itemID,
      showModal: true,
    });
  }

  closeModal = () => {
    this.setState(prevState => {
      return {
        showModal: !prevState.showModal
      };
    });
  }
  
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
    // grabing data from portfolio items custom post type
    const portfolioItemsData = data.allWpPortfolioItem.edges;
    // Filter basded on ID of clicked Item
    const portfolioModalItemData =
      portfolioItemsData.filter(item => {
        return item.node.databaseId === this.state.modalItemID;
      });

    let modalContent = null;
    if (this.state.showModal) {
      modalContent = (
        <PortfolioModalItem 
        data={portfolioModalItemData}
        show={this.state.showModal}
        isDesktop={this.state.isDesktop} />
      );
    }
    
    return (
      <Fragment>
        <SEO title='Home' />
        <GlobalStyle overflow={this.state.showModal ? 1 : 0} />
        <MainWrapper>
          <HeroContainer 
            heroImage={heroImage} 
            heroSection={heroSection} />
          <ServicesContainer data={servicesSection} />
          <StatsContainer data={statsSection} />
          <ResumeContainer 
            skillsData={skillsSection}
            experienceData={experienceSection}
           />
          <PortfolioContainer 
            data={portfolioSection}
            items={portfolioItemsData}
            portfolioItemClick={this.handlePortoflioItemClick}
          />
          <CoverLetterContainer data={aboutMeSection} />
          <ContactContainer data={contactSection} />
        </MainWrapper>
        <Footer />
        <Modal
          modalClosed={this.closeModal}
          show={this.state.showModal}
          color={'true'} >
          <CloseIcon clicked={this.closeModal} />
          {modalContent}
        </Modal>
      </Fragment>      
    );
  }
}

export default Home;


export const frontPageQuery = graphql`
query {
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
            gatsbyImage(formats: WEBP, placeholder: BLURRED, width: 1400)
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
              gatsbyImage(formats: WEBP, placeholder: BLURRED, width: 850)
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
  allWpPortfolioItem {
    edges {
      node {
        content
        title
        portfolioInfo {
          portfolioLink
        }
        databaseId
        categories {
          nodes {
            name
            databaseId
          }
        }
        featuredImage {
          node {
            altText
            mediaItemUrl
            gatsbyImage(placeholder: BLURRED, formats: WEBP, width: 970)
          }
        }
      }
    }
  }
}
`;

