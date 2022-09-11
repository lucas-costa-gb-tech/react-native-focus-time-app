import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function HomeScreen() {
  const [text, setText] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          label="What would you like to focus on?"
          value={text}
          onChangeText={setText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputContainer: {
    flex: 0.5,
    padding: 25,
    justifyContent: 'flex-start',
  },
});
