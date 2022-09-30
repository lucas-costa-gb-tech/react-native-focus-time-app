import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text } from 'react-native';

import { palette } from '../../../utils/constants/ui';

export type CountdownProps = {
  minutes: number;
  isPaused: boolean;
  onProgress: (num: number) => void;
  onEnd: () => void;
};

const minutesToMillis = (min: number) => min * 1000 * 60;
const formatTime = (time: number) => (time < 10 ? `0${time}` : time.toString());

export default function Countdown ({ minutes, isPaused, onProgress, onEnd }: CountdownProps) {
  const interval = useRef<number | null>(null);
  const [millis, setMillis] = useState<number>(0);

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;

  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        clearInterval(interval.current as number);
        onEnd();
        return time;
      }
      const timeLeft = time - 1000;
      return timeLeft;
    });
  };

  useEffect(() => {
    setMillis(minutesToMillis(minutes));
  }, [minutes]);

  useEffect(() => {
    onProgress(millis / minutesToMillis(minutes));
  }, [millis]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countDown, 1000);
    return () => clearInterval(interval.current as number);
  }, [isPaused]);

  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 80,
    fontWeight: 'bold',
    color: palette.primary.contrastText,
    padding: 24,
    backgroundColor: 'rgba(94, 132, 226, 0.3)',
  },
});
