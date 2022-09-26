import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRecoilState } from 'recoil';
import { TextInput } from 'react-native-paper';

import { subjectsAtom } from '../../../state/subjects';
import { Basic } from '../../templates';
import { RoundedButton } from '../../components';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { StackParamList } from '../../../navigation';

type HomeProps = NativeStackScreenProps<StackParamList, 'Home'>;

export default function Home({ navigation }: HomeProps) {
  const [subjects, setSubjects] = useRecoilState(subjectsAtom);
  const [currentSubject, setCurrentSubject] = useState<string>('');

  const handlePress = () => {
    const newSubjects = subjects.concat(currentSubject);
    setSubjects(newSubjects);
    setCurrentSubject('');
    navigation.navigate('FocusedSubject', { subjectIndex: newSubjects.length - 1 });
  };

  return (
    <Basic>
      <View style={styles.screenContainer}>
        <View style={styles.textInputRow}>
          <View style={styles.textInputContainer}>
            <TextInput
              label="No que deseja focar?"
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
        <View style={styles.subjectsContainer}>
          {subjects.map((subject) => <Text key={subject} style={{ color: 'white' }}>{subject}</Text>)}
        </View>
      </View>
    </Basic>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
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
  subjectsContainer: {},
});
