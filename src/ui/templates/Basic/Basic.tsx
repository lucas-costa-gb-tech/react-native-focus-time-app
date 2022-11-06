import { Platform, StyleSheet, StatusBar } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import { palette } from '../../../utils/constants/ui';

import type { ReactNode } from 'react';

export type BasicProps = {
  children: ReactNode;
};

export default function Basic({ children }: BasicProps) {
  return (
    <SafeAreaView style={styles.container}>
      {children}
      <StatusBar barStyle="light-content" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: palette.primary.main,
  },
});
