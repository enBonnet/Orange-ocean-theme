import { Colors } from '../../Theme';
import TokenSettings, { TokenFontStyle } from '../TokenSettings';

import classes from './classes';
import comments from './comments';
import constants from './constants';
import functions from './functions';
import keywords from './keywords';
import punctuation from './punctuation';
import strings from './strings';
import typings from './typings';
import variables from './variables';

export default (colors: Colors): TokenSettings[] => [
  ...buildGeneralSettings(colors),
  ...classes(colors),
  ...comments(colors),
  ...constants(colors),
  ...functions(colors),
  ...keywords(colors),
  ...punctuation(colors),
  ...strings(colors),
  ...typings(colors),
  ...variables(colors),
];

function buildGeneralSettings(_colors: Colors): TokenSettings[] {
  return [
    {
      scope: ['emphasis'],
      settings: {
        fontStyle: TokenFontStyle.italic,
      },
    },
    {
      scope: ['strong'],
      settings: {
        fontStyle: TokenFontStyle.bold,
      },
    },
    {
      scope: ['header'],
      settings: {
        foreground: '#c94324',
      },
    },
    {
      scope: ['source'],
      settings: {
        foreground: '#c986ff',
      },
    },
  ];
}
