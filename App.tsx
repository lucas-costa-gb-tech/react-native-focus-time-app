import { SafeAreaView, StyleSheet, StatusBar, Text, } from 'react-native';
import { Palette } from './src/utils/constants/style';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.text}>Hello World!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: Palette.PrimaryMain,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Palette.PrimaryContrastText,
  },
});
