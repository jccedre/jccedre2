/*
 * Importing all style objects and exporting them so the ThemeProvider can
 * access them.
 */
import colors from './Colors';
import { media, orientation, height } from './Breakpoints';
import animations from './Animations';
import container from './Container';

export const main = {
  colors: colors,
  media: media,
  orientation: orientation,
  height: height,
  animations: animations,
  container: container,
};
