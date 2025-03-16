import TokenSettings from '../TokenSettings';

import c from './c';
import coffeescript from './coffeescript';
import csharp from './csharp';
import diff from './diff';
import elixir from './elixir';
import go from './go';
import htmlCssJsx from './html-jsx-css';
import java from './java';
import javascript from './javascript';
import makefile from './makefile';
import markdown from './markdown';
import objectiveC from './objective-c';
import python from './python';
import shell from './shell';
import toml from './toml';
import typescript from './typescript';
import yaml from './yaml';

export default (colors): TokenSettings[] => [
  ...c(colors),
  ...coffeescript(colors),
  ...csharp(colors),
  ...diff(colors),
  ...elixir(colors),
  ...go(colors),
  ...htmlCssJsx(colors),
  ...java(colors),
  ...javascript(colors),
  ...makefile(colors),
  ...markdown(colors),
  ...objectiveC(colors),
  ...python(colors),
  ...shell(colors),
  ...toml(colors),
  ...typescript(colors),
  ...yaml(colors),
];
