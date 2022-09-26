import React from 'react';
import styled from 'styled-components';
import chunk from 'lodash/chunk';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css';


import PortfolioItem from './PortfolioItem';


const StyledPortfolioCarousel = styled.div`
display: block;
min-width: 0px;
width: 92vw;


.swiper-slide {
  text-align: center;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

${props => props.theme.media.medium`
  width: 100vw;
  
  .swiper-slide {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
  }

  .swiper-slide .large {
    grid-column: span 3;
  }

  .swiper-slide .small {
    grid-column: span 2;
  }
`}

${props => props.theme.media.large`
  width: 63vw;
`}

.swiper {
  width: 100%;
  height: auto;
}

.swiper-wrapper {

}



.swiper-slide {
  ${'' /* &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.theme.colors.siteBackground};
    opacity: 0.5;
  } */}
}

.swiper-slide img,
.swiper-slide .animated__wrapper {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gatsby-image-wrapper {
  height: 100%;
}
`;




const portfolioCarousel = (props) => {
  const slideGroup = chunk(props.items, 4);
  const isTablet = props.windowSize;

  let content = '';

  if (isTablet) {
    content = (
      <Swiper
        ref={props.carouselRef}
        slidesPerView={1}
        navigation={false}>
        {slideGroup.map((items, i) => (
          <SwiperSlide key={i}>
            {items.map((item, index) => (
              <PortfolioItem
                key={item.node.databaseId}
                portfolioItemClick={() => props.portfolioItemClick(item.node.databaseId)}
                className={`${index === 0 || index === 3 ? 'large' : 'small'}`}
                gatsbyImage={item.node.featuredImage.node}
                altText={item.node.featuredImage.node.altText} />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    );
  } else {
    content = (
      <Swiper
        ref={props.carouselRef}
        slidesPerView={1}
        navigation={false}>
          {props.items.map((item, index) => (
            <SwiperSlide key={index}>
              <PortfolioItem
                key={item.node.databaseId}
                portfolioItemClick={() => props.portfolioItemClick(item.node.databaseId)}
                gatsbyImage={item.node.featuredImage.node}
                altText={item.node.featuredImage.node.altText} />
            </SwiperSlide>
          ))}
        
      </Swiper>
    );
  }
  
  return (
    <StyledPortfolioCarousel>
      {content}
    </StyledPortfolioCarousel>
  );
}

export default portfolioCarousel;