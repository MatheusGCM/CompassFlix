import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './style';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <TouchableOpacity
        style={styles.buttonEnter}
        onPress={() => navigation.navigate('Home')}>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
