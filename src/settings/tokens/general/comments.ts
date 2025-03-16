import { Colors } from '../../Theme';
import TokenSettings, { TokenFontStyle } from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [comments(colors), ...jsdoc(colors)];

function comments(_colors: Colors): TokenSettings {
  return {
    name: 'Comments',
    scope: [
      'comment',
      'punctuation.definition.comment',
      'unused.comment',
      'wildcard.comment',
    ],
    settings: {
      fontStyle: TokenFontStyle.italic,
      foreground: '#f798505e',
    },
  };
}

function jsdoc(_colors: Colors): TokenSettings[] {
  return [
    {
      name: 'JSDoc comment keywords/classes',
      scope: [
        'comment keyword.codetag.notation',
        'comment.block.documentation keyword',
        'comment.block.documentation storage.type.class',
      ],
      settings: {
        fontStyle: TokenFontStyle.italic,
      },
    },
    {
      name: 'JSDoc-style comment parameters',
      scope: ['comment.block.documentation variable'],
      settings: {
        fontStyle: TokenFontStyle.italic,
      },
    },
  ];
}
