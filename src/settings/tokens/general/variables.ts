import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  variables(colors),
  ...destructuring(colors),
];

function variables(_colors: Colors): TokenSettings {
  return {
    name: 'Variables and object properties',
    scope: ['variable', 'support.variable.property'],
    settings: {
      foreground: '#9c4430',
    },
  };
}

function destructuring(_colors: Colors): TokenSettings[] {
  return [
    {
      name: 'Destructuring value for alias',
      scope: [
        'meta.import variable.other.readwrite',
        'meta.object-binding-pattern-variable variable.object.property',
      ],
      settings: {
        foreground: '#f47c20',
      },
    },
    {
      name: 'Destructuring value alias',
      scope: ['meta.import variable.other.readwrite.alias'],
      settings: {
        foreground: '#f8f4f9',
      },
    },
  ];
}
