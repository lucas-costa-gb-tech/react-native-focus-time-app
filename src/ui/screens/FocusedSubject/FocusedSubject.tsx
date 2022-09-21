import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRecoilValue } from 'recoil';

import { subjectsAtom } from '../../../state/subjects';
import { Palette } from '../../../utils/constants/ui';
import { Basic } from '../../templates';
import { Countdown, RoundedButton } from '../../components';

export default function FocusedSubject() {
  const subjects = useRecoilValue(subjectsAtom);
  const [isStarted, setIsStarted] = useState<boolean>(false);

  const handleProgress = () => {};

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
            minutes={1}
            isPaused={!isStarted}
            onProgress={handleProgress}
            onEnd={handleEnd}
          />
          <View style={styles.subjectContainer}>
            <Text style={styles.subjectTitle}>Focando em:</Text>
            <Text style={styles.subjectText}>{subjects[subjects.length - 1]}</Text>
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
    paddingTop: 24,
  },
  subjectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Palette.PrimaryContrastText,
    textAlign: 'center',
  },
  subjectText: {
    color: Palette.PrimaryContrastText,
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
