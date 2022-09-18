import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useRecoilState } from 'recoil';
import { TextInput } from 'react-native-paper';

import { Basic } from '../../templates';
import { RoundedButton } from '../../components';
import { subjectsAtom } from '../../../state/subjects';

export default function HomeScreen() {
  const [subjects, setSubjects] = useRecoilState(subjectsAtom);
  const [currentSubject, setCurrentSubject] = React.useState<string>('');

  const handlePress = () => {
    const newSubjects = subjects.concat(currentSubject);
    setSubjects(newSubjects);
    setCurrentSubject('');
  };

  return (
    <Basic>
      <View style={styles.container}>
        <View style={styles.textInputRow}>
          <View style={styles.textInputContainer}>
            <TextInput
              label="What would you like to focus on?"
              value={currentSubject}
              onChangeText={setCurrentSubject}
            />
          </View>
          <View style={styles.roundedButtonContainer}>
            <RoundedButton
              title="+"
              size={50}
              onPress={handlePress}
            />
          </View>
        </View>
      </View>
    </Basic>
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
