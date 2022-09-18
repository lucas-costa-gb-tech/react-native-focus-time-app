import * as React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';

import { Palette } from '../../../utils/constants/ui';

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
    paddingTop: StatusBar.currentHeight,
    backgroundColor: Palette.PrimaryMain,
  },
});
