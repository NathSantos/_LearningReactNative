import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import { Exercise } from '@screens/Exercise';
import { Home } from '@screens/Home';
import { History } from '@screens/History';
import { Profile } from '@screens/Profile';

type AppRoutes = {
  Home: undefined;
  History: undefined;
  Profile: undefined;
  Exercise: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <Screen name='Home' component={Home} />
      <Screen name='History' component={History} />
      <Screen name='Profile' component={Profile} />
      <Screen name='Exercise' component={Exercise} />
    </Navigator>
  );
}
