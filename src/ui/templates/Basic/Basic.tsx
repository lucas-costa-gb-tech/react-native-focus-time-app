import * as React from 'react';
import { Platform, StyleSheet, StatusBar } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import { palette } from '../../../utils/constants/ui';

interface BasicProps {
  children: React.ReactNode;
}

export default function Basic({ children }: BasicProps) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      {children}
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
