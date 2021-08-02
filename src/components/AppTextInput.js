import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import {theme} from '../constants';

export default function AppTextInput({
  color,
  numMode,
  style,
  icon,
  ...otherProps
}) {
  return (
    <View style={[styles.container, style]}>
      {/* {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={16}
          color={theme.colors.midgray}
        />
      )} */}
      {numMode && (
        <Text
          style={{
            color: theme.colors.black,
            fontFamily: theme.fontFamily.regular,
            fontSize: theme.sizes.body * 0.8,
          }}>
          +254
        </Text>
      )}
      <TextInput
        placeholderTextColor="white"
        style={styles.textInput}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    flexDirection: 'row',
    paddingLeft: 15,
    marginVertical: 10,
    alignItems: 'center',
    height: 40,
    backgroundColor: theme.colors.cardInactive,
  },
  textInput: {
    fontSize: theme.sizes.body,
    fontFamily: theme.fontFamily.regular,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: 40,
    color: 'white',
  },
});
