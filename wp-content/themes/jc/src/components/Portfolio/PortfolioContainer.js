import React, { Component } from 'react';
import styled from 'styled-components';


import Title from '../UI/Title/Title';
import Paragraph from '../UI/Paragraph/Paragraph';
import PortfolioCarousel from './PortfolioCarousel';
import SliderArrow from '../UI/Arrow/SliderArrow';


const StyledPortfolioContainer = styled.section`
  display: grid;
  align-items: center;
  grid-template-columns: none;
  grid-template-areas:
    "portfolioWrapper";

  ${props => props.theme.media.large`
    grid-template-areas:
      ".  portfolioWrapper";
    grid-template-columns: 2fr 4fr;
    align-items: start;
    
  `}
`;

const StyledTitle = styled(Title)`
  width: 100%;
`;

const StyledDescription = styled(Paragraph)`
  
`;

const StyledPortfolioWrapper = styled.div`
  grid-area: portfolioWrapper;
  padding: 2rem 1rem;


  ${props => props.theme.media.medium`
    padding: 0;
  `}
`;

const StyledPortfolioHeader = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  ${props => props.theme.media.medium`
    padding: 3rem 1rem;
  `}
`;

const StyledPortfolioCarouselArrows = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;

 ${props => props.theme.media.medium`
    
  `}
`;

const NextArrow = (props) => {
  const { className } = props;
  return (
    <SliderArrow
      className={className}
      clicked={props.clicked} />
  );
}

const PrevArrow = (props) => {
  const { className } = props;
  return (
    <SliderArrow
      className={className}
      clicked={props.clicked}
      direction={'prev'} />
  );
};


class PortfolioContainer extends Component {
  
  constructor(props) {
    super(props);
    this.carouselRef = React.createRef();
    this.swiper = null;
    this.state = {
      isTablet: false,
      showModal: false
    };
  }

  componentDidMount() {
    this.swiper = this.carouselRef.current.swiper;
    this.resizeHandler();
    window.addEventListener('resize', this.resizeHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHandler);
  }

  nextSlide = () => {
    this.swiper.slideNext();
  }
  prevSlide = () => {
    this.swiper.slidePrev();
  }

  resizeHandler = () => {
    this.setState({
      isTablet: window.innerWidth >= 768,
    });
  }





  render() {
    const isTablet = this.state.isTablet;
    return (
      <StyledPortfolioContainer>
        <StyledPortfolioWrapper>
          <StyledPortfolioHeader>
            <StyledTitle
              type='5'
              color='white'
              content={this.props.data.portfolioSectionTitle} />
            <StyledDescription
              color='gray'
              fontSize='body'
              fontFamily='body'
              content={this.props.data.portfolioSectionSubtitle} />
            <StyledPortfolioCarouselArrows>
              <PrevArrow clicked={this.prevSlide} />
              <NextArrow clicked={this.nextSlide} />
            </StyledPortfolioCarouselArrows>
          </StyledPortfolioHeader>
          <PortfolioCarousel
            portfolioItemClick={this.props.portfolioItemClick}
            items={this.props.items}
            carouselRef={this.carouselRef}
            windowSize={isTablet} />
        </StyledPortfolioWrapper>
      </StyledPortfolioContainer>
    );
  }
}

export default PortfolioContainer;