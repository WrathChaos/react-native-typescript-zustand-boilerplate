declare module "@react-navigation/native" {
  import { NavigationContainerProps } from "react-navigation";

  export type ThemeColors = {
    [key: string]: any;
  };

  export interface Theme {
    dark: boolean;
    colors: ThemeColors;
  }

  export function NavigationContainer(
    props: NavigationContainerProps<Theme>, // Ensure the correct type is used here
  ): React.ReactElement;
}
