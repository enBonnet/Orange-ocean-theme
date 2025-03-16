import { Colors } from '../../Theme';
import TokenSettings, { TokenFontStyle } from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  punctuation(colors),
  keys(colors),
  aliases(colors),
];

function punctuation(_colors: Colors): TokenSettings {
  return {
    name: 'YAML separators',
    scope: [
      'punctuation.definition.block.scalar.folded.yaml',
      'punctuation.definition.block.scalar.literal.yaml',
      'punctuation.definition.block.sequence.item.yaml',
      'punctuation.separator.key-value.mapping.yaml',
      'support.other.chomping-indicator.yaml',
    ],
    settings: {
      foreground: '#9c4430',
    },
  };
}

function keys(_colors: Colors): TokenSettings {
  return {
    name: 'YAML keys',
    scope: ['entity.name.tag.yaml'],
    settings: {
      foreground: '#c986ff',
    },
  };
}

function aliases(_colors: Colors): TokenSettings {
  return {
    name: 'YAML aliases',
    scope: ['variable.other.alias.yaml'],
    settings: {
      fontStyle: TokenFontStyle.underline,
      foreground: '#c986ff',
    },
  };
}
