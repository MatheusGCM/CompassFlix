import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './style';
import IconLock from 'react-native-vector-icons/EvilIcons';

export const EmailPasswordField = ({
  value,
  setValue,
  isPassword,
  inputName,
  iconName,
}) => {
  return (
    <View style={styles.boxInput}>
      <IconLock
        size={25}
        name={iconName}
        color={'#ffffff80'}
        style={{paddingTop: 8, paddingLeft: 10}}
      />
      <TextInput
        value={value}
        onChangeText={v => setValue(v)}
        style={styles.input}
        placeholder={inputName}
        secureTextEntry={isPassword}
        placeholderTextColor={'#ffffff80'}
      />
    </View>
  );
};
