import { Colors } from '../../Theme';
import TokenSettings, { TokenFontStyle } from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  classDefinitions(colors),
  instanceKeywords(colors),
  inheritedClasses(colors),
  builtinClasses(colors),
];

function classDefinitions(_colors: Colors): TokenSettings {
  return {
    name: 'Class definitions',
    scope: ['entity.name.type.class'],
    settings: {
      foreground: '#f47c20',
      fontStyle: TokenFontStyle.bold,
    },
  };
}

function instanceKeywords(_colors: Colors): TokenSettings {
  return {
    name: 'Instance keywords (this, super, self, etc.)',
    scope: [
      'keyword.other.this',
      'variable.language',
      'variable.parameter.function.language.special',
    ],
    settings: {
      foreground: '#f47c20',
    },
  };
}

function inheritedClasses(_colors: Colors): TokenSettings {
  return {
    name: 'Inherited classes',
    scope: ['entity.other.inherited-class'],
    settings: {
      foreground: '#f47c20',
    },
  };
}

function builtinClasses(_colors: Colors): TokenSettings {
  return {
    name: 'Built-in classes',
    scope: ['support.class.builtin'],
    settings: {
      foreground: null,
    },
  };
}
