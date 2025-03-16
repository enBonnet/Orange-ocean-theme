import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  prototypeProperty(colors),
  constants(colors),
  specialLanguageClasses(colors),
  classesInUse(colors),
  ...functions(colors),
];

function prototypeProperty(_colors: Colors): TokenSettings {
  return {
    name: 'JavaScript prototype prop',
    scope: ['support.variable.property.js'],
    settings: { foreground: '#9c4430' },
  };
}

function constants(_colors: Colors): TokenSettings {
  return {
    name: 'JavaScript constant definitions',
    scope: ['variable.other.constant.js'],
    settings: {
      foreground: '#f47c20',
    },
  };
}

function specialLanguageClasses(_colors: Colors): TokenSettings {
  return {
    name: 'JavaScript language classes',
    scope: [
      'support.class.console.js',
      'support.type.object.module.js',
      'support.class.promise.js',
      'support.constant.json.js',
    ],
    settings: {
      foreground: '#f47c20',
    },
  };
}

function classesInUse(_colors: Colors): TokenSettings {
  return {
    name: 'JavaScript classes in use',
    scope: ['support.class.js'],
    settings: {
      foreground: '#f47c20',
    },
  };
}

function functions(_colors: Colors): TokenSettings[] {
  return [
    {
      name: 'JS function definitions',
      scope: [
        'meta.object-literal.key.js entity.name.function.js',
        'meta.var.expr.js meta.definition.variable.js entity.name.function.js',
        'meta.definition.property.js entity.name.function.js',
      ],
      settings: {
        foreground: '#c94324',
      },
    },
    {
      name: 'JS function invocation',
      scope: ['meta.function-call.js'],
      settings: {
        foreground: '#38a8a8',
      },
    },
  ];
}
