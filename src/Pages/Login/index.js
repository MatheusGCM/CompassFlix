import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {EmailPasswordFiel} from '../../Components/emailPasswordField';
import styles from './style';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Text style={{color: 'white'}}>LOGIN</Text>
      <Text style={{color: 'white'}}>Entre na sua conta para continuar.</Text>
      <View style={styles.input}>
        <EmailPasswordFiel isPassword={false} inputName={'e-mail'} />
      </View>
      <EmailPasswordFiel isPassword={true} inputName={'senha'} />
      <TouchableOpacity
        style={styles.buttonEnter}
        onPress={() => navigation.navigate('Home')}>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
