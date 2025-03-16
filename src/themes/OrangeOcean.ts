import buildThemeSettings from '../settings/buildThemeSettings';
import { ANSIColors, BaseColors, MiscColors, Theme } from '../settings/Theme';

// Base colors
const base: BaseColors = {
  bg: '',
  fg: '',
  cyan: '',
  green: '',
  orange: '',
  pink: '',
  purple: '',
  red: '',
  yellow: '',
  white: '',
};

// ANSI colors
const ansi: ANSIColors = {
  color0: '',
  color1: '',
  color2: '',
  color3: '',
  color4: '',
  color5: '',
  color6: '',
  color7: '',
  color8: '',
  color9: '',
  color10: '',
  color11: '',
  color12: '',
  color13: '',
  color14: '',
  color15: '',
};

const misc: MiscColors = {
  comment: '',
  activeBorder: '',
  activeBackground: '',
  lineHighlight: '',
  container: '',
  nonText: '',
  tabDropBg: '',
  bgLighter: '',
  bgLight: '',
  bgDark: '',
  bgDarker: '',
  purpleDarker: '',
  selection: '',
  menuHover: '',
};

const theme: Theme = {
  name: 'Orange Ocean',
  author: 'Ender Bonnet',
  maintainers: ['Ender Bonnet <enbonnet@gmail.com>'],
  type: 'dark',
  colorVars: { base, ansi, misc },

  ...buildThemeSettings(base, ansi, misc),
};

export default theme;
