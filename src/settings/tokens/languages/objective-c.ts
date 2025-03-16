import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (_colors: Colors): TokenSettings[] => [
  {
    name: 'Objective-C Storage',
    scope: [
      'meta.implementation storage.type.objc',
      'meta.interface-or-protocol storage.type.objc',
    ],
    settings: {
      foreground: '#f47c20',
    },
  },
  {
    name: 'Objective-C Types',
    scope: [
      'meta.protocol-list.objc',
      'meta.return-type.objc',
      'storage.type.objc',
    ],
    settings: {
      foreground: '#f47c20',
    },
  },
];
