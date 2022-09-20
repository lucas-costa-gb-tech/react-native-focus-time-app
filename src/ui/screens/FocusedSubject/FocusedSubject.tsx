import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Basic } from '../../templates';
import { Countdown, RoundedButton } from '../../components';

export default function FocusedSubject() {
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
        </View>
        <View style={styles.buttonContainer}>
          {isStarted ? (
            <RoundedButton
              size={125}
              title="pause"
              onPress={handlePause}
            />
          ) : (
            <RoundedButton
              size={125}
              title="start"
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
  buttonContainer: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
