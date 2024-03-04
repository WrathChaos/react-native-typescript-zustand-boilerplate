import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  userContainer: ViewStyle;
  userButton: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: "center",
      justifyContent: "center",
    },
    userContainer: {
      marginTop: 16,
      alignItems: "center",
      justifyContent: "center",
    },
    userButton: {
      height: 35,
      width: 150,
      marginTop: 32,
      borderRadius: 16,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#135",
    },
  });
};
