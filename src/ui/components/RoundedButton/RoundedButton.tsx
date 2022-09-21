import { StyleSheet, Text, TouchableOpacity, GestureResponderEvent } from 'react-native';

import { Palette } from '../../../utils/constants/ui';

interface RoundedButtonProps {
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
    borderColor: Palette.PrimaryContrastText,
    borderRadius: props.size / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: props.size / 4,
    color: Palette.PrimaryContrastText,
  },
});