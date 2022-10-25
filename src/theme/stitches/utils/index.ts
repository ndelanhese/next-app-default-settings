import { CSSProperties } from '@stitches/react';

import { FontFamilyTypes, StitchesUtils } from './types';

export const stitchesUtils: StitchesUtils = {
  px: (value: string | number): CSSProperties => ({
    paddingRight: value,
    paddingLeft: value,
  }),
  py: (value: string | number): CSSProperties => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  mx: (value: string | number): CSSProperties => ({
    marginRight: value,
    marginLeft: value,
  }),
  my: (value: string | number): CSSProperties => ({
    marginTop: value,
    marginBottom: value,
  }),
  fontFamilyBase: (value: FontFamilyTypes): CSSProperties => {
    switch (value) {
      case 'regular':
        return {
          fontFamily: '$baseRegular',
          fontWeight: '$baseRegular',
          fontStyle: 'normal',
        };
      case 'medium':
        return {
          fontFamily: '$baseMedium',
          fontWeight: '$baseMedium',
          fontStyle: 'normal',
        };
      case 'semiBold':
        return {
          fontFamily: '$baseSemiBold',
          fontWeight: '$baseSemiBold',
          fontStyle: 'normal',
        };
      case 'bold':
        return {
          fontFamily: '$baseBold',
          fontWeight: '$baseBold',
          fontStyle: 'normal',
        };
      default:
        return {
          fontFamily: '$baseMedium',
          fontWeight: '$baseMedium',
          fontStyle: 'normal',
        };
    }
  },
  fontFamilySecondary: (value: FontFamilyTypes): CSSProperties => {
    switch (value) {
      case 'regular':
        return {
          fontFamily: '$secondaryRegular',
          fontWeight: '$secondaryRegular',
          fontStyle: 'normal',
        };
      case 'medium':
        return {
          fontFamily: '$secondaryMedium',
          fontWeight: '$secondaryMedium',
          fontStyle: 'normal',
        };
      case 'semiBold':
        return {
          fontFamily: '$secondarySemiBold',
          fontWeight: '$secondarySemiBold',
          fontStyle: 'normal',
        };
      case 'bold':
        return {
          fontFamily: '$secondaryBold',
          fontWeight: '$secondaryBold',
          fontStyle: 'normal',
        };
      default:
        return {
          fontFamily: '$secondaryMedium',
          fontWeight: '$secondaryMedium',
          fontStyle: 'normal',
        };
    }
  },
};
