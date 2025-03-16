import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  punctuation(colors),
  keys(colors),
  prerequisiteNames(colors),
];

function punctuation(_colors: Colors): TokenSettings {
  return {
    name: 'Makefile interpolation punctuation',
    scope: ['punctuation.definition.variable.makefile'],
    settings: {
      foreground: '#f47c20',
    },
  };
}

function keys(_colors: Colors): TokenSettings {
  return {
    name: 'Makefile keys',
    scope: ['entity.name.function.target.makefile'],
    settings: {
      foreground: '#f47c20',
    },
  };
}

function prerequisiteNames(_colors: Colors): TokenSettings {
  return {
    name: 'Makefile prerequisite names',
    scope: ['meta.scope.prerequisites.makefile'],
    settings: {
      foreground: '#c94324',
    },
  };
}
