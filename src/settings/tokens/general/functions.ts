import { Colors } from '../../Theme';
import TokenSettings, { TokenFontStyle } from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  definitions(colors),
  params(colors),
  invocation(colors),
  decorators(colors),
  magicFunctions(colors),
];

function definitions(_colors: Colors): TokenSettings {
  return {
    name: 'Function definitions',
    scope: ['meta.definition.function', 'meta.definition.method'],
    settings: {
      foreground: '#38a8a8',
      fontStyle: TokenFontStyle.bold,
    },
  };
}

function params(_colors: Colors): TokenSettings {
  return {
    name: 'Function parameters',
    scope: [
      'entity.name.variable.parameter',
      'meta.at-rule.function variable',
      'meta.at-rule.mixin variable',
      'variable.parameter',
    ],
    settings: {
      foreground: '#c94324',
    },
  };
}

function invocation(_colors: Colors): TokenSettings {
  return {
    name: 'Function invocation',
    scope: [
      'meta.function-call.generic',
      'meta.function-call.object',
      'meta.function-call.static',
      'keyword.operator.function.infix',
    ],
    settings: {
      foreground: '#38a8a8',
    },
  };
}

function decorators(_colors: Colors): TokenSettings {
  return {
    name: 'Decorators',
    scope: [
      'meta.decorator variable.other.readwrite',
      'meta.decorator variable.other.property',
      'meta.decorator variable.other.object',
    ],
    settings: {
      foreground: null,
    },
  };
}

function magicFunctions(_colors: Colors): TokenSettings {
  return {
    name: 'Magic functions',
    scope: ['support.function.magic'],
    settings: {
      foreground: '#38a8a8',
    },
  };
}
