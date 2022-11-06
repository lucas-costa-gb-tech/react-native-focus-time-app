import 'react-native-get-random-values';
import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useRecoilState } from 'recoil';
import { Checkbox, TextInput } from 'react-native-paper';
import { v4 as uuidv4 } from 'uuid';

import { subjectsAtom } from '../../../state/subjects';
import { Basic } from '../../templates';
import { RoundedButton } from '../../components';

import type { ListRenderItem } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { StackParamList } from '../../../navigation';
import type { SubjectItem } from '../../../state/subjects/types';

export type HomeProps = NativeStackScreenProps<StackParamList, 'Home'>;

export default function Home({ navigation }: HomeProps) {
  const [subjects, setSubjects] = useRecoilState(subjectsAtom);
  const [subjectTitle, setSubjectTitle] = useState<string>('');

  const handlePress = () => {
    const currentSubjectId = uuidv4();
    const currentSubject: SubjectItem = {
      id: currentSubjectId,
      title: subjectTitle,
      isDone: false,
    };
    const newSubjects = subjects.concat(currentSubject);
    setSubjects(newSubjects);
    setSubjectTitle('');
    navigation.navigate('FocusedSubject', { subjectId: currentSubjectId });
  };

  const handlePressCheckbox = (subjectId: string) => {
    navigation.navigate('FocusedSubject', { subjectId });
  };

  const renderItem: ListRenderItem<SubjectItem> = ({ item: { id, title, isDone} }) => (
    <Checkbox.Item
      label={title}
      status={isDone ? 'checked' : 'unchecked'}
      onPress={() => {
        handlePressCheckbox(id);
      }}
    />
  );

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
        <FlatList
          style={styles.subjectsContainer}
          data={subjects}
          renderItem={renderItem}
          keyExtractor={({ id }) => id}
        />
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
  subjectsContainer: {
    flex: 1,
  },
});
