import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRecoilState } from 'recoil';
import { TextInput } from 'react-native-paper';

import { subjectsAtom } from '../../../state/subjects';
import { Basic } from '../../templates';
import { RoundedButton } from '../../components';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { StackParamList } from '../../../navigation';
import type { SubjectItem } from '../../../state/subjects/types';

type HomeProps = NativeStackScreenProps<StackParamList, 'Home'>;

export default function Home({ navigation }: HomeProps) {
  const [subjects, setSubjects] = useRecoilState(subjectsAtom);
  const [subjectTitle, setSubjectTitle] = useState<string>('');

  const handlePress = () => {
    const subjectToAdd = {
      id: 0,
      title: subjectTitle,
      isDone: false,
    } as SubjectItem;
    const newSubjects = subjects.concat(subjectToAdd);
    setSubjects(newSubjects);
    setSubjectTitle('');
    navigation.navigate('FocusedSubject', { subjectIndex: newSubjects.length - 1 });
  };

  return (
    <Basic>
      <View style={styles.screenContainer}>
        <View style={styles.textInputRow}>
          <View style={styles.textInputContainer}>
            <TextInput
              label="No que deseja focar?"
              value={subjectTitle}
              onChangeText={setSubjectTitle}
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
          {subjects.map(({ title }) => <Text key={title} style={{ color: 'white' }}>{title}</Text>)}
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
