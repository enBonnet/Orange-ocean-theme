import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (_colors: Colors): TokenSettings[] => [
  {
    name: 'Strings',
    scope: [
      'string',
      'punctuation.definition.string.begin',
      'punctuation.definition.string.end',
      'punctuation.support.type.property-name.begin',
      'punctuation.support.type.property-name.end',
    ],
    settings: {
      foreground: '#2a7f7f',
    },
  },
];
