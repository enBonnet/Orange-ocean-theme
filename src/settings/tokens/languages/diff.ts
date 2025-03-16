import { Colors } from '../../Theme';
import TokenSettings, { TokenFontStyle } from '../TokenSettings';

export default (_colors: Colors): TokenSettings[] => {
  return [
    {
      scope: ['meta.diff', 'meta.diff.header'],
      settings: {
        foreground: '#38a8a8',
      },
    },
    {
      scope: ['markup.inserted'],
      settings: {
        foreground: '#2a7f7f',
      },
    },
    {
      scope: ['markup.deleted'],
      settings: {
        foreground: '#c94324',
      },
    },
    {
      scope: ['markup.changed'],
      settings: {
        foreground: '#f47c20',
      },
    },
    {
      scope: ['invalid'],
      settings: {
        foreground: '#ffffff',
        fontStyle: TokenFontStyle.ui,
      },
    },
    {
      scope: ['invalid.deprecated'],
      settings: {
        foreground: '#ffffff',
        fontStyle: TokenFontStyle.ui,
      },
    },
    {
      scope: ['entity.name.filename'],
      settings: {
        foreground: '#f47c20',
      },
    },
    {
      scope: ['markup.error'],
      settings: {
        foreground: '#94151b',
      },
    },
  ];
};
