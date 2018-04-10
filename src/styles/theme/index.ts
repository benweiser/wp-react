import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

export interface ColorScheme {
  readonly primary: string;
  readonly secondary: string;
  readonly text: string;
  readonly dark: {
    readonly text: string;
  };
}

export const colors: ColorScheme = {
  primary: "#b8baf9",
  secondary: "#0ff",
  text: "#00f",
  dark: {
    text: "#fff"
  }
};

// typographic scale
export const fontSizes: ReadonlyArray<number> = [
  12,
  14,
  16,
  20,
  24,
  32,
  48,
  64,
  96,
  128
];

export const breakpoints: ReadonlyArray<string> = ["680px", "900px", "1200px"];

export interface ThemeInterface {
  colors: ColorScheme;
  breakpoints: ReadonlyArray<string>;
  fontSizes: ReadonlyArray<number>;
}

export const theme: ThemeInterface = {
  colors,
  breakpoints,
  fontSizes
};

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

export { css, injectGlobal, keyframes, ThemeProvider };
export default styled;
