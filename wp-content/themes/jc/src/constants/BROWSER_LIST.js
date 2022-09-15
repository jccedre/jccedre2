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
    browserVersion: 'Edge: 105+',
  },
  {
    id: 2,
    browserIcon: FirefoxIcon,
    browserVersion: 'Firefox: 104+',
  },
  {
    id: 3,
    browserIcon: SafariIcon,
    browserVersion: 'Safari: 15+',
  },
  {
    id: 4,
    browserIcon: ChromeIcon,
    browserVersion: 'Chrome: 105+',
  },
];

export default browserList;
