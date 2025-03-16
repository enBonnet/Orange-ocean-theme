import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  ...functions(colors),
  punctuation(colors),
];

function functions(_colors: Colors): TokenSettings[] {
  return [
    {
      name: 'Python function definitions',
      scope: ['entity.name.function.python'],
      settings: { foreground: '#38a8a8' },
    },
    {
      name: 'Python function invocation',
      scope: [
        'meta.function-call.python support.type.python',
        'meta.function-call.python support.function.builtin.python',
      ],
      settings: { foreground: '#38a8a8' },
    },
  ];
}

function punctuation(_colors: Colors): TokenSettings {
  return {
    name: 'Python separators',
    scope: [
      'punctuation.separator.period.python',
      'punctuation.separator.colon.python',
      'punctuation.separator.dict.python',
      'punctuation.section.function.begin.python',
    ],
    settings: { foreground: '#f8f4f9' },
  };
}
