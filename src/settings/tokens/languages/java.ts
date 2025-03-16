import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  functions(colors),
  punctuationBounds(colors),
  types(colors),
  resets(colors),
];

function functions(_colors: Colors): TokenSettings {
  return {
    name: 'Java function invocation',
    scope: ['meta.method-call.java meta.method'],
    settings: {
      foreground: '#f8f4f9',
    },
  };
}

function punctuationBounds(_colors: Colors): TokenSettings {
  return {
    name: 'Java punctuation bounds',
    scope: ['storage.type.generic.java'],
    settings: {
      foreground: '#f47c20',
    },
  };
}

function types(_colors: Colors): TokenSettings {
  return {
    name: 'Java Types',
    scope: ['source.java storage.type'],
    settings: {
      foreground: '#f47c20',
    },
  };
}

function resets(_colors: Colors): TokenSettings {
  return {
    name: 'Java foreground resets',
    scope: ['keyword.operator.dereference.java', 'storage.modifier.import'],
    settings: {
      foreground: '#f8f4f9',
    },
  };
}
