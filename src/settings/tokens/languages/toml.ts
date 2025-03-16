import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  punctuation(colors),
  keys(colors),
];

function punctuation(_colors: Colors): TokenSettings {
  return {
    name: 'TOML separators',
    scope: ['meta.group.double.toml', 'meta.group.toml'],
    settings: {
      foreground: '#c94324',
    },
  };
}

function keys(_colors: Colors): TokenSettings {
  return {
    name: 'TOML keys',
    scope: [
      'entity.name.section.toml',
      'entity.name.tag.yaml',
      'variable.other.key.toml',
    ],
    settings: {
      foreground: '#38a8a8',
    },
  };
}
