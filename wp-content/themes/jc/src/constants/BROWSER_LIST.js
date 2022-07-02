/*
 * Browser List Constants Object
 */

import ChromeIcon from '../components/BrowserWarning/BrowserIcons/ChromeIcon';
import FirefoxIcon from '../components/BrowserWarning/BrowserIcons/FirefoxIcon';
import EdgeIcon from '../components/BrowserWarning/BrowserIcons/EdgeIcon';
import SafariIcon from '../components/BrowserWarning/BrowserIcons/SafariIcon';

const browserList = [
  {
    id: 1,
    browserIcon: EdgeIcon,
    browserVersion: 'Edge: 11+',
  },
  {
    id: 2,
    browserIcon: FirefoxIcon,
    browserVersion: 'Firefox: 62+',
  },
  {
    id: 3,
    browserIcon: SafariIcon,
    browserVersion: 'Safari: 11+',
  },
  {
    id: 4,
    browserIcon: ChromeIcon,
    browserVersion: 'Chrome: 68+',
  },
];

export default browserList;
