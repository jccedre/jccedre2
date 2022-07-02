import React, { Component, Fragment } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';



const StyledContent = styled.div`
  max-height: 400px;
  overflow: scroll;
  line-height: 1.6;

  div {
    padding-bottom: 2rem;
  }


  ${props => props.theme.media.medium`
    max-width: 90%;
    margin: 0 auto;
  `}

  ${props => props.theme.media.large`
    max-height: 500px;
  `}
`;

class PageTemplate extends Component {
  render() {

    return (
      <Fragment>
        {/* <SEO title={currentPage.title} /> */}
        <div>Helloaa</div>
      </Fragment>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`
