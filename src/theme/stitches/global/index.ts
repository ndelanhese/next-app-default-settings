import { globalCss } from '..';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    border: 0,
    outline: 0,
  },
  html: {
    fontSize: '1em' /* 16px */,
  },
  body: {
    height: '100vh',
    width: '100%',
  },
  button: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
});
