import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  prototypeProperty(colors),
  constants(colors),
  specialLanguageClasses(colors),
  classesInUse(colors),
  ...functions(colors),
  ...typings(colors),
];

function prototypeProperty(_colors: Colors): TokenSettings {
  return {
    name: 'TypeScript prototype prop',
    scope: ['support.variable.property.ts', 'support.variable.property.tsx'],
    settings: { foreground: '#c94324' },
  };
}

function constants(_colors: Colors): TokenSettings {
  return {
    name: 'TypeScript constant definitions',
    scope: ['variable.other.constant.ts', 'variable.other.constant.tsx'],
    settings: {
      foreground: '#f47c20',
    },
  };
}

function specialLanguageClasses(_colors: Colors): TokenSettings {
  return {
    name: 'TypeScript language classes',
    scope: [
      'support.class.console.ts',
      'support.type.object.module.ts',
      'support.class.promise.ts',
      'support.constant.json.ts',
      'support.class.console.tsx',
      'support.type.object.module.tsx',
      'support.class.promise.tsx',
      'support.constant.json.tsx',
    ],
    settings: {
      foreground: '#f47c20',
    },
  };
}

function functions(_colors: Colors): TokenSettings[] {
  return [
    {
      name: 'TS function definitions',
      scope: [
        'meta.object-literal.key.ts entity.name.function.ts',
        'meta.var.expr.ts meta.definition.variable.ts entity.name.function.ts',
        'meta.definition.property.ts entity.name.function.ts',
        'meta.object-literal.key.tsx entity.name.function.tsx',
        'meta.var.expr.tsx meta.definition.variable.tsx entity.name.function.tsx',
        'meta.definition.property.tsx entity.name.function.tsx',
      ],
      settings: {
        foreground: '#c94324',
      },
    },
    {
      name: 'TS function invocation',
      scope: ['meta.function-call.ts', 'meta.function-call.tsx'],
      settings: {
        foreground: '#38a8a8',
      },
    },
  ];
}

function classesInUse(_colors: Colors): TokenSettings {
  return {
    name: 'TypeScript classes in use',
    scope: ['support.class.ts', 'support.class.tsx'],
    settings: {
      foreground: '#f47c20',
    },
  };
}

function typings(_colors: Colors): TokenSettings[] {
  return [
    {
      name: 'TS Typing Definitions',
      scope: [
        'entity.name.type.alias.ts',
        'entity.name.type.interface.ts',
        'entity.name.type.enum.ts',
        'entity.name.type.alias.tsx',
        'entity.name.type.interface.tsx',
        'entity.name.type.enum.tsx',
      ],
      settings: {
        foreground: '#f47c20',
      },
    },
    {
      name: 'TS Typing Uses',
      scope: [
        'support.type.primitive.ts',
        'support.type.builtin.ts',
        'entity.name.type.ts',
        'support.type.primitive.tsx',
        'support.type.builtin.tsx',
        'entity.name.type.tsx',
      ],
      settings: {
        foreground: '#f47c20',
      },
    },
    {
      name: 'TS Generics / Type Parameters',
      scope: [
        'meta.type.parameters.ts support.type.primitive.ts',
        'meta.type.parameters.ts entity.name.type.ts',
        'meta.type.parameters.tsx support.type.primitive.tsx',
        'meta.type.parameters.tsx entity.name.type.tsx',
      ],
      settings: {
        foreground: '#f47c20',
      },
    },
    {
      name: 'TS Generics Punctuation',
      scope: [
        'punctuation.definition.typeparameters.begin.ts',
        'punctuation.definition.typeparameters.end.ts',
        'punctuation.definition.typeparameters.begin.tsx',
        'punctuation.definition.typeparameters.end.tsx',
      ],
      settings: {
        foreground: '#38a8a8',
      },
    },
  ];
}
