import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FocusedSubject, Home } from '../../ui/screens';

export type StackParamList = {
  Home: undefined;
  FocusedSubject: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FocusedSubject" component={FocusedSubject} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
