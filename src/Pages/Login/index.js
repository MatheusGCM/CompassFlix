import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {EmailPasswordField} from '../../Components/EmailPasswordField';
import styles from './style';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Text style={styles.loginText}>Login</Text>
      <Text style={styles.descriptionText}>
        Entre na sua conta para continuar.
      </Text>
      <View style={styles.input}>
        <EmailPasswordField
          isPassword={false}
          inputName={'e-mail'}
          iconName={'user'}
        />
      </View>
      <EmailPasswordField
        isPassword={true}
        inputName={'senha'}
        iconName={'lock'}
      />
      <TouchableOpacity
        style={styles.buttonEnter}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
