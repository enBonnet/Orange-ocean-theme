import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (_colors: Colors): TokenSettings[] => [
  {
    name: 'C Types',
    scope: ['storage.type.c'],
    settings: {
      foreground: '#f47c20',
    },
  },
];
