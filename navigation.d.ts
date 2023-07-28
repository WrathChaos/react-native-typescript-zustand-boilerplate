declare module "@react-navigation/native" {
  export type ThemeColors = {
    [key: string]: string;
  };

  export interface Theme {
    dark: boolean;
    colors: ThemeColors;
  }
}
