/*
 * Importing all style objects and exporting them so the ThemeProvider can
 * access them.
 */
import colors from './Colors';
import fonts from './Fonts';
import fontSize from './FontSize';
import headings from './Headings';
import { media, orientation, height } from './Breakpoints';
import animations from './Animations';
import container from './Container';

export const main = {
  colors: colors,
  fonts: fonts,
  fontSize: fontSize,
  headings: headings,
  media: media,
  orientation: orientation,
  height: height,
  animations: animations,
  container: container,
};
