import { RecoilRoot } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FocusedSubject, Home } from './src/ui/screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="FocusedSubject" component={FocusedSubject} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}
