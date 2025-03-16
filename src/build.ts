import { writeFileSync } from 'fs';
import { OrangeOcean } from './themes';

writeFileSync(
  `${__dirname}/../theme/orange-ocean-theme.json`,
  JSON.stringify(OrangeOcean, null, 2)
);
