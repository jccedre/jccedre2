import React, { Component } from "react"
import 'normalize.css';
import '../style.css';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { detect } from 'detect-browser';
import { main } from './styles/Main';

import BrowserWarning from './components/BrowserWarning/BrowserWarning';
import BROWSER_LIST from './constants/BROWSER_LIST';


const GlobalStyle = createGlobalStyle`
  html,body {
    font-size: 0.8rem;
    background-color: ${props => props.theme.colors.siteBackground} !important;
    

    ${props => props.theme.media.medium`
      font-size: 1rem;
    `}

     ${props => props.theme.media.xlarge`
      font-size: 1.2rem;
    `}
  }
`;

const StyledWrapRootProvider = styled.main`

  .tl-edges {
    width: 100%;
  }

  .tl-wrapper {
    height: 100vh;
    position: relative;
  }

  #gatsby-focus-wrapper {
    max-width: 100%;
  }


   ${props => props.theme.media.medium`
      html {
        font-size: 10px;
      }
    `}

      ${props => props.theme.media.large`
      #gatsby-focus-wrapper {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 6rem;
      }
    `}

`;


class WrapRootProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      browserList: BROWSER_LIST,
      browserFlag: false,
      browserName: null,
      showModal: false
    }
  }

  componentDidMount() {
    const browser = detect();
    this.checkBrowser(browser);
  }

  checkBrowser(browser) {
    const browserVersion = browser.version.split('.');
    const browserNum = browserVersion[0];
    this.setState({browserName: browser.name});

    switch (browser && browser.name) {
      case 'chrome':
        if (browserNum >= '68') { this.setState({ browserFlag: false }) }
        break;
      case 'edge':
        if (browserNum >= '11') { this.setState({ browserFlag: false }) }
        break;
      case 'firefox':
        if (browserNum >= '61') { this.setState({ browserFlag: false }) }
        break;
      case 'safari':
        if (browserNum >= '11') { this.setState({ browserFlag: false }) }
        break;
      case 'ios':
        this.setState({ browserFlag: false })
        break;
      case 'android':
        this.setState({ browserFlag: false })
        break;
      case 'crios':
        this.setState({ browserFlag: false })
        break;
      case 'fban':
        this.setState({ browserFlag: false })
        break;
      case 'fbav':
        this.setState({ browserFlag: false })
        break;
      case 'facebook':
        this.setState({ browserFlag: false })
        break;
      case 'fxios':
        this.setState({ browserFlag: false })
        break;
      case 'instagram':
        this.setState({ browserFlag: false })
        break;
      default:
        this.setState({ browserFlag: true })
    }
  }

  render() {
    let { children } = this.props;

    if (this.state.browserFlag) {
      children = null;
    }
    return (
      <ThemeProvider theme={main}>
      <GlobalStyle />
        <StyledWrapRootProvider>
          <BrowserWarning
            browserItems={this.state.browserList}
            show={this.state.browserFlag} />
          {children}
        </StyledWrapRootProvider>
      </ThemeProvider>
    );
  }
}

export default WrapRootProvider;
