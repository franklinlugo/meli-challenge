import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: Palette;
    layoutMaxWidth: string;
  }
}

interface Palette {
  turbo: string;
  mineShaft: string;
  doveGray: string;
  dustyGray: string;
  gallery: string;
  dodgerBlue: string;
  white: string;
}
