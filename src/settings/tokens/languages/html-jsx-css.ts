import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  jsxTagPunctuation(colors),
  htmlTags(colors),
  componentTags(colors),
  ...selectors(colors),
  attributeNames(colors),
  resets(colors),
  ...css(colors),
];

function jsxTagPunctuation(_colors: Colors): TokenSettings {
  return {
    name: 'JSX Tag Punctuation',
    scope: [
      'punctuation.definition.tag.begin.js',
      'punctuation.definition.tag.end.js',
      'punctuation.definition.tag.begin.tsx',
      'punctuation.definition.tag.end.tsx',
    ],
    settings: {
      foreground: '#f798505e',
    },
  };
}

function htmlTags(_colors: Colors): TokenSettings {
  return {
    name: 'HTML tags',
    scope: ['entity.name.tag'],
    settings: {
      foreground: '#c94324',
    },
  };
}

function componentTags(_colors: Colors): TokenSettings {
  return {
    name: 'Component tags',
    scope: [
      'entity.name.tag support.class.component.js',
      'entity.name.tag support.class.component.tsx',
    ],
    settings: {
      foreground: '#c986ff',
    },
  };
}

function selectors(_colors: Colors): TokenSettings[] {
  return [
    {
      name: 'Generic selectors',
      scope: ['meta.selector'],
      settings: {
        foreground: '#c986ff',
      },
    },
    {
      name: 'Parent selectors (like `&`)',
      scope: ['entity.other.attribute-name.parent-selector'],
      settings: {
        foreground: '#c986ff',
      },
    },
    {
      name: 'Attribute selector strings',
      scope: ['meta.attribute-selector.scss'],
      settings: {
        foreground: '#38a8a8',
      },
    },
    {
      name: 'Attribute selector brackets',
      scope: [
        'punctuation.definition.attribute-selector.end.bracket.square.scss',
        'punctuation.definition.attribute-selector.begin.bracket.square.scss',
      ],
      settings: {
        foreground: '#c94324',
      },
    },
  ];
}

function attributeNames(_colors: Colors): TokenSettings {
  return {
    name: 'HTML/CSS attribute names',
    scope: ['entity.other.attribute-name'],
    settings: {
      foreground: '#38a8a8',
    },
  };
}

function resets(_colors: Colors): TokenSettings {
  return {
    name: 'JSX / TSX / CSS foreground resets',
    scope: [
      'punctuation.section.embedded.begin.tsx',
      'punctuation.section.embedded.end.tsx',
      'punctuation.section.embedded.begin.jsx',
      'punctuation.section.embedded.end.jsx',
      'punctuation.separator.list.comma.css',
    ],
    settings: {
      foreground: '#f8f4f9',
    },
  };
}

function css(_colors: Colors): TokenSettings[] {
  return [
    {
      name: 'CSS Property Keys',
      scope: ['support.constant.property-value.css'],
      settings: {
        foreground: '#2a7f7f',
      },
    },
    {
      name: '@media rules',
      scope: [
        'keyword.control.at-rule.media.scss',
        'keyword.control.at-rule.media.scss punctuation.definition.keyword.scss',
      ],
      settings: {
        foreground: '#38a8a8',
      },
    },
  ];
}
