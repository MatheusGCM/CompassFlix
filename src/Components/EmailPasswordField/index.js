import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './style';

export const EmailPasswordField = ({isPassword, inputName}) => {
  return (
    <View style={styles.boxInput}>
      <TextInput
        style={styles.input}
        placeholder={inputName}
        secureTextEntry={isPassword}
        placeholderTextColor={'#ffffff80'}
      />
    </View>
  );
};
