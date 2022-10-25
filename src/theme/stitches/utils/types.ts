import { CSSProperties } from '@stitches/react';

export type FontFamilyTypes = 'regular' | 'medium' | 'semiBold' | 'bold';

export interface StitchesUtils {
  px: (value: string | number) => CSSProperties;
  py: (value: string | number) => CSSProperties;
  mx: (value: string | number) => CSSProperties;
  my: (value: string | number) => CSSProperties;
  fontFamilyBase: (value: FontFamilyTypes) => CSSProperties;
  fontFamilySecondary: (value: FontFamilyTypes) => CSSProperties;
}
