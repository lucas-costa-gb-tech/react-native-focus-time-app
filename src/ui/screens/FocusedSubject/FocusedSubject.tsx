import { useState } from 'react';
import { StyleSheet, Text, Vibration, View } from 'react-native';
import { useRecoilState } from 'recoil';
import { ProgressBar } from 'react-native-paper';

import { subjectsAtom } from '../../../state/subjects';
import { palette } from '../../../utils/constants/ui';
import { Basic } from '../../templates';
import { Countdown, RoundedButton } from '../../components';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { StackParamList } from '../../../navigation';
import type { CountdownProps } from '../../components';
import type { RoundedButtonProps } from '../../components';

export type FocusedSubjectProps = NativeStackScreenProps<StackParamList, 'FocusedSubject'>;

export default function FocusedSubject({ route }: FocusedSubjectProps) {
  const { subjectId } = route.params;
  const [subjects, setSubjects] = useRecoilState(subjectsAtom);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [minutes, setMinutes] = useState<number>(0.25);
  const [progress, setProgress] = useState<number>(1);

  const currentSubject = subjects.find(({ id }) => id === subjectId);

  const handleEnd: CountdownProps['onEnd'] = () => {
    const updatedSubjects = subjects.map((subject) => {
      if (subject.id === subjectId) {
        return {
          ...subject,
          isDone: true,
        };
      }
      return subject;
    });
    setSubjects(updatedSubjects);
    Vibration.vibrate();
  };

  const handleStart: RoundedButtonProps['onPress'] = () => {
    setIsStarted(true);
  };

  const handlePause: RoundedButtonProps['onPress'] = () => {
    setIsStarted(false);
  };

  const setFive: RoundedButtonProps['onPress'] = () => {
    setMinutes(5);
  };

  const setTen: RoundedButtonProps['onPress'] = () => {
    setMinutes(10);
  };

  const setTwenty: RoundedButtonProps['onPress'] = () => {
    setMinutes(20);
  };

  return (
    <Basic>
      <View style={styles.screenContainer}>
        <View style={styles.countdownContainer}>
          <Countdown
            minutes={minutes}
            isPaused={!isStarted}
            onProgress={setProgress}
            onEnd={handleEnd}
          />
          <View style={styles.subjectContainer}>
            <Text style={styles.subjectTitle}>Focando em:</Text>
            <Text style={styles.subjectText}>{currentSubject?.title}</Text>
          </View>
          <View style={styles.progressBarContainer}>
            <ProgressBar
              style={styles.progressBar}
              progress={progress}
              color={palette.primary.light}
            />
          </View>
        </View>
        <View style={styles.timingContainer}>
          <RoundedButton
            size={75}
            title="5"
            onPress={setFive}
          />
          <RoundedButton
            size={75}
            title="10"
            onPress={setTen}
          />
          <RoundedButton
            size={75}
            title="20"
            onPress={setTwenty}
          />
        </View>
        <View style={styles.buttonContainer}>
          {isStarted ? (
            <RoundedButton
              size={125}
              title="pausar"
              onPress={handlePause}
            />
          ) : (
            <RoundedButton
              size={125}
              title="iniciar"
              onPress={handleStart}
            />
          )}
        </View>
      </View>
    </Basic>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  countdownContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subjectContainer: {
    width: '100%',
    paddingTop: 20,
  },
  subjectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: palette.primary.contrastText,
    textAlign: 'center',
  },
  subjectText: {
    color: palette.primary.contrastText,
    textAlign: 'center',
  },
  progressBarContainer: {
    width: '100%',
    paddingTop: 20,
    paddingHorizontal: 40,
  },
  progressBar: {
    height: 10,
  },
  timingContainer: {
    flex: 0.2,
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
