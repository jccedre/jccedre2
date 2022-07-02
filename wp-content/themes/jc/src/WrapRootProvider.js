import React, { Component } from "react"
import 'normalize.css';
import '../style.css';
import styled, { ThemeProvider } from 'styled-components';
import { detect } from 'detect-browser';
import { main } from './styles/Main';

import BrowserWarning from './components/BrowserWarning/BrowserWarning';
import BROWSER_LIST from './constants/BROWSER_LIST';


const StyledWrapRootProvider = styled.main`
  height: 100vh;
  /* If you need to support browser without CSS var support (<= IE11) */
  height: calc(100vh - var(--vh-offset, 0px));
  /* enable vh fix */
  width: 100vw;
  display: flex;
  flex-flow: column;
  flex: 1 0 100%;
  overflow: ${props => props.overflow ? 'hidden' : 'initial'};
  -webkit-overflow-scrolling: touch;
  min-height: 0;

  .tl-edges {
    width: 100%;
  }

  .tl-wrapper {
    height: 100vh;
    position: relative;
  }
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
