import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { RecoilRoot } from 'recoil';

import { HomeScreen } from './src/ui/screens';
import { Palette } from './src/utils/constants/ui';

export default function App() {
  return (
    <RecoilRoot>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <HomeScreen />
      </SafeAreaView>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: Palette.PrimaryMain,
  },
});
