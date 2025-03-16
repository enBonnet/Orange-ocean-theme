import { Colors } from '../../Theme';
import TokenSettings, { TokenFontStyle } from '../TokenSettings';

export default (_colors: Colors): TokenSettings[] => [
  {
    name: 'Keywords',
    scope: ['keyword', 'punctuation.definition.keyword'],
    settings: {
      foreground: '#c986ff',
    },
  },
  {
    name: 'Keyword "new"',
    scope: ['keyword.control.new', 'keyword.operator.new'],
    settings: {
      fontStyle: TokenFontStyle.bold,
    },
  },
];
