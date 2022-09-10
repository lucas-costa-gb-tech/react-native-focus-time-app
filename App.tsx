import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { HomeScreen } from './src/screens';
import { Palette } from './src/utils/constants/style';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: Palette.PrimaryMain,
  },
});
