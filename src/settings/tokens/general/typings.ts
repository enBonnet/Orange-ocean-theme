import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  storage(colors),
  ...types(colors),
  modifiers(colors),
];

function storage(_colors: Colors): TokenSettings {
  return {
    name: 'Storage',
    scope: ['storage'],
    settings: {
      foreground: '#c986ff',
    },
  };
}

function types(_colors: Colors): TokenSettings[] {
  return [
    {
      name: 'Types',
      scope: ['entity.name.type'],
      settings: {
        foreground: '#f47c20',
      },
    },
    {
      name: 'Generics, templates, and mapped type declarations',
      scope: [
        'entity.name.type.type-parameter',
        'meta.indexer.mappedtype.declaration entity.name.type',
        'meta.type.parameters entity.name.type',
      ],
      settings: {
        foreground: '#f47c20',
      },
    },
  ];
}

function modifiers(_colors: Colors): TokenSettings {
  return {
    name: 'Modifiers',
    scope: ['storage.modifier'],
    settings: {
      foreground: '#f47c20',
    },
  };
}
