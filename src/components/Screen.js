import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {getStatusBarHeight} from 'react-native-status-bar-height';

export default function Screen({children, style}) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight(),
  },
});
