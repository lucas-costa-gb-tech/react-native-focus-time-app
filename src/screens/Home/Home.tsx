import { StyleSheet, Text, View } from 'react-native';
import { Palette } from '../../utils/constants/style';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: Palette.PrimaryContrastText,
  },
});
