import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  punctuation(colors),
  ...typings(colors),
  ...functions(colors),
];

function typings(_colors: Colors): TokenSettings[] {
  return [
    {
      name: 'Go Types',
      scope: ['source.go storage.type'],
      settings: {
        foreground: '#f47c20',
      },
    },
    {
      name: 'Go Types',
      scope: ['entity.name.type.go'],
      settings: { foreground: '#f47c20' },
    },
  ];
}

function functions(_colors: Colors): TokenSettings[] {
  return [
    {
      name: 'Go function definitions',
      scope: ['entity.name.function.go'],
      settings: { foreground: '#38a8a8' },
    },
    {
      name: 'Go function invocation',
      scope: ['support.function.go'],
      settings: { foreground: '#38a8a8' },
    },
  ];
}

function punctuation(_colors: Colors): TokenSettings {
  return {
    name: 'Go separators',
    scope: ['punctuation.other.period.go', 'punctuation.other.colon.go'],
    settings: { foreground: '#c986ff' },
  };
}
