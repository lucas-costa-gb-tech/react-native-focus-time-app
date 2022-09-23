import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRecoilValue } from 'recoil';
import { ProgressBar } from 'react-native-paper';

import { subjectsAtom } from '../../../state/subjects';
import { palette } from '../../../utils/constants/ui';
import { Basic } from '../../templates';
import { Countdown, RoundedButton } from '../../components';

export default function FocusedSubject() {
  const subjects = useRecoilValue(subjectsAtom);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [minutes, setMinutes] = useState<number>(0.1);
  const [progress, setProgress] = useState<number>(0);

  const handleEnd = () => {};

  const handleStart = () => {
    setIsStarted(true);
  };

  const handlePause = () => {
    setIsStarted(false);
  };

  return (
    <Basic>
      <View style={styles.container}>
        <View style={styles.countdownContainer}>
          <Countdown
            minutes={minutes}
            isPaused={!isStarted}
            onProgress={setProgress}
            onEnd={handleEnd}
          />
          <View style={styles.subjectContainer}>
            <Text style={styles.subjectTitle}>Focando em:</Text>
            <Text style={styles.subjectText}>{subjects[subjects.length - 1]}</Text>
          </View>
          <View style={styles.progressBarContainer}>
            <ProgressBar
              style={styles.progressBar}
              progress={progress}
              color={palette.primary.light}
            />
          </View>
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
  container: {
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
  buttonContainer: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
