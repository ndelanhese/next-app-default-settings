import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

import { breakpoints } from './breakpoints';
import { defaultTheme } from './defaultTheme';
import { stitchesUtils } from './utils';

export const { styled, css, getCssText, config, globalCss } = createStitches({
  prefix: 'yalabuy-ecommerce',
  theme: defaultTheme,
  utils: stitchesUtils,
  media: breakpoints,
});

export type CSS = Stitches.CSS<typeof config> | undefined;
