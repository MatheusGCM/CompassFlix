import React from 'react';
import {TextInput, View} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

import styles from './style';

export function EmailPasswordField({
  value,
  setValue,
  isPassword,
  inputName,
  iconName,
  errorHolder,
  setIsFocused,
}) {
  return (
    <View style={styles.boxInput}>
      <Icon
        size={25}
        name={iconName}
        color={!errorHolder ? '#ffffff80' : '#EC2626A6'}
        style={{paddingTop: 8, paddingLeft: 10}}
      />
      <TextInput
        value={value}
        onChangeText={v => setValue(v)}
        style={styles.input}
        placeholder={inputName}
        secureTextEntry={isPassword}
        placeholderTextColor={!errorHolder ? '#ffffffb3' : '#EC2626A6'}
        autoCapitalize="none"
        onFocus={() => setIsFocused(false)}
      />
    </View>
  );
}
