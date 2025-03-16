import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  functions(colors),
  constants(colors),
  docComments(colors),
  ...modules(colors),
  ...punctuation(colors),
];

function functions(_colors: Colors): TokenSettings {
  return {
    name: 'Elixir function definitions',
    scope: ['entity.name.function.elixir'],
    settings: { foreground: '#38a8a8' },
  };
}

function constants(_colors: Colors): TokenSettings {
  return {
    name: 'Elixir atoms',
    scope: ['constant.other.symbol.elixir', 'constant.language.symbol.elixir'],
    settings: { foreground: '#38a8a8' },
  };
}

function modules(_colors: Colors): TokenSettings[] {
  return [
    {
      name: 'Elixir module definitions',
      scope: ['entity.name.type.module.elixir'],
      settings: { foreground: '#f47c20' },
    },
    {
      name: 'Elixir module variables',
      scope: [
        'variable.other.readwrite.module.elixir',
        'variable.other.readwrite.module.elixir punctuation.definition.variable.elixir',
      ],
      settings: {
        foreground: '#c94324',
      },
    },
  ];
}

function punctuation(_colors: Colors): TokenSettings[] {
  return [
    {
      name: 'Elixir separators',
      scope: ['punctuation.separator.method.elixir'],
      settings: {
        foreground: '#c986ff',
      },
    },
    {
      name: 'Elixir interpolation',
      scope: ['punctuation.section.embedded.elixir'],
      settings: {
        foreground: '#c986ff',
      },
    },
    {
      name: 'Elixir capture ampersands',
      scope: [
        'variable.other.anonymous.elixir punctuation.definition.variable.elixir',
      ],
      settings: {
        foreground: '#c986ff',
      },
    },
  ];
}

function docComments({ misc }: Colors): TokenSettings {
  return {
    name: 'Elixir doc comments',
    scope: ['documentation.heredoc.elixir'],
    settings: { foreground: misc.comment },
  };
}
