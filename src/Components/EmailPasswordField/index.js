import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/EvilIcons';

export const EmailPasswordField = ({
  value,
  setValue,
  isPassword,
  inputName,
  iconName,
  errorHolder,
}) => {
  return (
    <View style={styles.boxInput}>
      <Icon
        size={25}
        name={iconName}
        color={!errorHolder ? '#ffffff80' : 'red'}
        style={{paddingTop: 8, paddingLeft: 10}}
      />
      <TextInput
        value={value}
        onChangeText={v => setValue(v)}
        style={styles.input}
        placeholder={inputName}
        secureTextEntry={isPassword}
        placeholderTextColor={!errorHolder ? '#ffffffb3' : 'red'}
        autoCapitalize="none"
        onFocus={() => setValue(errorHolder)}
      />
    </View>
  );
};
