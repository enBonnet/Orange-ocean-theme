import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  interpolation(colors),
  ...destructuring(colors),
];

function interpolation(_colors: Colors): TokenSettings {
  return {
    name: 'CoffeeScript interpolation punctuation',
    scope: ['punctuation.section.embedded.coffee'],
    settings: {
      foreground: '#c94324',
    },
  };
}

function destructuring(_colors: Colors): TokenSettings[] {
  return [
    {
      name: 'Destructuring value for alias',
      scope: ['meta.variable.assignment.destructured.object.coffee variable'],
      settings: {
        foreground: '#c94324',
      },
    },
    {
      name: 'Destructuring value alias',
      scope: [
        'meta.variable.assignment.destructured.object.coffee variable variable',
      ],
      settings: {
        foreground: '#c94324',
      },
    },
  ];
}
