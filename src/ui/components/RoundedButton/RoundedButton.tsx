import { StyleSheet, Text, TouchableOpacity, GestureResponderEvent } from 'react-native';

import { palette } from '../../../utils/constants/ui';

export type RoundedButtonProps = {
  title: string;
  size: number;
  onPress: (event: GestureResponderEvent) => void | undefined;
};

export default function RoundedButton(props: RoundedButtonProps) {
  return (
    <TouchableOpacity style={styles(props).button} onPress={props.onPress}>
      <Text style={styles(props).text}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = (props: RoundedButtonProps) => StyleSheet.create({
  button: {
    width: props.size,
    height: props.size,
    borderWidth: 2,
    borderColor: palette.primary.contrastText,
    borderRadius: props.size / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: props.size / 4,
    color: palette.primary.contrastText,
  },
});