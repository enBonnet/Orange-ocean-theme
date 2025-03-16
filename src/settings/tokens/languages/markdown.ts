import { Colors } from '../../Theme';
import TokenSettings, { TokenFontStyle } from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  underlined(),
  bolded(colors),
  headings(colors),
  italics(colors),
  collections(colors),
  inlineCode(colors),
  ...links(colors),
  blockquotes(colors),
  hr(colors),
  codeBlocks(colors),
  constants(colors),
  ...braces(colors),
];

function underlined(): TokenSettings {
  return {
    name: 'Underlined markdown',
    scope: ['markup.underline'],
    settings: {
      fontStyle: TokenFontStyle.underline,
    },
  };
}

function bolded(_colors: Colors): TokenSettings {
  return {
    name: 'Bolded markdown',
    scope: ['markup.bold'],
    settings: {
      fontStyle: TokenFontStyle.bold,
      foreground: '#9c4430',
    },
  };
}

function headings(_colors: Colors): TokenSettings {
  return {
    name: 'Markdown headings',
    scope: ['markup.heading'],
    settings: {
      fontStyle: TokenFontStyle.bold,
      foreground: '#c94324',
    },
  };
}

function italics(_colors: Colors): TokenSettings {
  return {
    name: 'Markdown italics',
    scope: ['markup.italic'],
    settings: {
      fontStyle: TokenFontStyle.italic,
      foreground: '#c986ff',
    },
  };
}

function collections(_colors: Colors): TokenSettings {
  return {
    name: 'Collections (bullets + lists)',
    scope: [
      'beginning.punctuation.definition.list.markdown',
      'beginning.punctuation.definition.quote.markdown',
      'punctuation.definition.link.restructuredtext',
    ],
    settings: {
      foreground: '#c94324',
    },
  };
}

function inlineCode(_colors: Colors): TokenSettings {
  return {
    name: 'Inline code',
    scope: ['markup.inline.raw', 'markup.raw.restructuredtext'],
    settings: {
      foreground: '#2a7f7f',
    },
  };
}

function links(_colors: Colors): TokenSettings[] {
  return [
    {
      name: 'Links',
      scope: ['markup.underline.link', 'markup.underline.link.image'],
      settings: {
        foreground: '#c986ff',
      },
    },
    {
      name: 'Link text, image alt text',
      scope: [
        'meta.link.reference.def.restructuredtext',
        'punctuation.definition.directive.restructuredtext',
        'string.other.link.description',
        'string.other.link.title',
      ],
      settings: {
        foreground: '#38a8a8',
      },
    },
  ];
}

function blockquotes(_colors: Colors): TokenSettings {
  return {
    name: 'Blockquotes',
    scope: ['entity.name.directive.restructuredtext', 'markup.quote'],
    settings: {
      fontStyle: TokenFontStyle.italic,
      foreground: '#f798505e',
    },
  };
}

function hr(_colors: Colors): TokenSettings {
  return {
    name: 'Horizontal rule',
    scope: ['meta.separator.markdown'],
    settings: {
      foreground: '#c94324',
    },
  };
}

function codeBlocks(_colors: Colors): TokenSettings {
  return {
    name: 'Code blocks',
    scope: [
      'fenced_code.block.language',
      'markup.raw.inner.restructuredtext',
      'markup.fenced_code.block.markdown punctuation.definition.markdown',
    ],
    settings: {
      foreground: '#c94324',
    },
  };
}

function constants(_colors: Colors): TokenSettings {
  return {
    name: 'Markdown constants',
    scope: ['punctuation.definition.constant.restructuredtext'],
    settings: {
      foreground: '#c94324',
    },
  };
}

function braces(_colors: Colors): TokenSettings[] {
  return [
    {
      name: 'Braces in markdown headings',
      scope: [
        'markup.heading.markdown punctuation.definition.string.begin',
        'markup.heading.markdown punctuation.definition.string.end',
      ],
      settings: {
        foreground: '#c94324',
      },
    },
    {
      name: 'Braces in markdown paragraphs',
      scope: [
        'meta.paragraph.markdown punctuation.definition.string.begin',
        'meta.paragraph.markdown punctuation.definition.string.end',
      ],
      settings: {
        foreground: '#c94324',
      },
    },
    {
      name: 'Braces in markdown blockquotes',
      scope: [
        'markup.quote.markdown meta.paragraph.markdown punctuation.definition.string.begin',
        'markup.quote.markdown meta.paragraph.markdown punctuation.definition.string.end',
      ],
      settings: {
        foreground: '#c94324',
      },
    },
  ];
}
