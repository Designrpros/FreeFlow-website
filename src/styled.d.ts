import 'styled-components';
import { theme } from './app/styles/theme';

// Infer the theme type from the theme object itself
type CustomTheme = typeof theme;

declare module 'styled-components' {
  // Extend the default theme with our custom theme type
  export interface DefaultTheme extends CustomTheme {}
}