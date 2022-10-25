/* eslint-disable react/no-typos */
import 'react';

import { CSS } from '../index';

declare module 'react' {
  interface DOMAttributes {
    css?: CSS;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      css?: CSS;
    }
  }
}
