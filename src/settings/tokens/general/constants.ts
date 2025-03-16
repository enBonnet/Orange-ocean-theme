import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  constants(colors),
  userDefinedConstants(colors),
  constantEscapes(colors),
  timestamps(colors),
  builtinConstants(colors),
];

function constants(_colors: Colors): TokenSettings {
  return {
    name: 'Constants',
    scope: ['constant'],
    settings: {
      foreground: '#9c4430',
    },
  };
}

function userDefinedConstants(_colors: Colors): TokenSettings {
  return {
    name: 'User-defined constants',
    scope: ['variable.other.constant'],
    settings: {
      foreground: '#f47c20',
    },
  };
}

function constantEscapes(_colors: Colors): TokenSettings {
  return {
    name: 'Constant escape sequences',
    scope: [
      'constant.character.escape',
      'constant.character.string.escape',
      'constant.regexp',
    ],
    settings: {
      foreground: '#38a8a8',
    },
  };
}

function timestamps(_colors: Colors): TokenSettings {
  return {
    name: 'Dates and timestamps',
    scope: ['constant.other.date', 'constant.other.timestamp'],
    settings: {
      foreground: null,
    },
  };
}

function builtinConstants(_colors: Colors): TokenSettings {
  return {
    name: 'Built-in constants',
    scope: ['support.variable', 'variable.other.predefined'],
    settings: {
      foreground: null,
    },
  };
}
