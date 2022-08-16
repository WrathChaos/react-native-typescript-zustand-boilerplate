import React, { useMemo } from "react";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
/**
 * ? Local Imports
 */
import createStyles from "./ProfileScreen.style";
import Text from "@shared-components/text-wrapper/TextWrapper";
import useStore from "@services/zustand/store";
import RNBounceable from "@freakycoder/react-native-bounceable";

interface ProfileScreenProps {}

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const userData = useStore((state) => state.userData);
  const setUserData = useStore((state) => state.setUserData);

  return (
    <View style={styles.container}>
      <Text h1 color={colors.text}>
        Profile
      </Text>
      <View style={styles.userContainer}>
        <Text>{userData?.name}</Text>
        <Text>{userData?.email}</Text>
      </View>
      <RNBounceable
        style={styles.userButton}
        onPress={() => {
          setUserData({ name: "John Doe", email: "johndoe@gmail.com" });
        }}
      >
        <Text color="#fff">Set User</Text>
      </RNBounceable>
    </View>
  );
};

export default ProfileScreen;
