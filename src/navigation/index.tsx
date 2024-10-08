import React from 'react';
import {useColorScheme} from 'react-native';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {isReadyRef, navigationRef} from 'react-navigation-helpers';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREENS} from '@shared-constants';
import {DarkTheme, LightTheme, palette} from '@theme/themes';
// ? Screens
import HomeScreen from '@screens/home/HomeScreen';
import DetailScreen from '@screens/detail/DetailScreen';
import NotificationScreen from '@screens/notification/NotificationScreen';
import ProfileScreen from '@screens/profile/ProfileScreen';
import SearchScreen from '@screens/search/SearchScreen';

// ? If you want to use stack or tab or both
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigation = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === 'dark';

  React.useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);

  const renderTabIcon = (
    route: any,
    focused: boolean,
    color: string,
    size: number,
  ) => {
    let iconName = 'home';
    switch (route.name) {
      case SCREENS.HOME:
        iconName = focused ? 'home' : 'home-outline';
        break;
      case SCREENS.SEARCH:
        iconName = focused ? 'search' : 'search-outline';
        break;
      case SCREENS.NOTIFICATION:
        iconName = focused ? 'notifications' : 'notifications-outline';
        break;
      case SCREENS.PROFILE:
        iconName = focused ? 'person' : 'person-outline';
        break;
      default:
        iconName = focused ? 'home' : 'home-outline';
        break;
    }
    return (
      <Icon
        name={iconName}
        type={IconType.Ionicons}
        size={size}
        color={color}
      />
    );
  };

  const TabNavigation = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) =>
            renderTabIcon(route, focused, color, size),
          tabBarActiveTintColor: palette.primary,
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: isDarkMode ? palette.black : palette.white,
          },
        })}>
        <Tab.Screen name={SCREENS.HOME} component={HomeScreen} />
        <Tab.Screen name={SCREENS.SEARCH} component={SearchScreen} />
        <Tab.Screen
          name={SCREENS.NOTIFICATION}
          component={NotificationScreen}
        />
        <Tab.Screen name={SCREENS.PROFILE} component={ProfileScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
      theme={isDarkMode ? DarkTheme : LightTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={SCREENS.HOME_ROOT} component={TabNavigation} />
        <Stack.Screen name={SCREENS.DETAIL}>
          {props => <DetailScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
