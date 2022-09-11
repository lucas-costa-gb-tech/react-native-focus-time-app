import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';

import { RoundedButton } from '../../components';

export default function HomeScreen() {
  const [focusSubject, setFocusSubject] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.textInputRow}>
        <View style={styles.textInputContainer}>
          <TextInput
            label="What would you like to focus on?"
            value={focusSubject}
            onChangeText={setFocusSubject}
          />
        </View>
        <View style={styles.roundedButtonContainer}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => undefined}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'flex-start',
  },
  textInputRow: {
    padding: 25,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textInputContainer: {
    marginRight: 10,
    flex: 1,
  },
  roundedButtonContainer: {
    justifyContent: 'center',
  },
});
