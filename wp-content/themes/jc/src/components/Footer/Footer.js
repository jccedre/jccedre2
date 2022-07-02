import React, { Fragment } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

const StyledFooter = styled.footer`
  background: ${props => props.theme.colors.blueDark};
  padding: 2rem 1rem;
  font-family: 'Advent Pro', sans-serif;
  color: white;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  p {
    padding: 0 0.2rem;
    color: ${props => props.theme.colors.gray};
    margin: 0;
  }
`;

const StyledFooterItem = styled.div`
  justify-self: center;
  width: 100%;
`;

const footer = ( props ) => {
  const data = useStaticQuery(graphql`
    query allACFSiteOptions {
      allWp {
        nodes {
          siteConfig {
            siteConfig {
              footerInformation
              footerName
            }
          }
        }
      }
    }
  `)
  const FOOTER_DATA = data.allWp.nodes[0].siteConfig.siteConfig;
  const date = new Date();
  
  return(
    <StyledFooter>
      <p>{FOOTER_DATA.footerInformation} {date.getFullYear()}</p>
      <p>|</p>
      <p>{FOOTER_DATA.footerName}</p>
    </StyledFooter>
  );
}

export default footer;