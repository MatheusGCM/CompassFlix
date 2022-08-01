import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {EmailPasswordField} from '../../Components/EmailPasswordField';
import styles from './style';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Text style={{color: 'white'}}>LOGIN</Text>
      <Text style={{color: 'white'}}>Entre na sua conta para continuar.</Text>
      <View style={styles.input}>
        <EmailPasswordField isPassword={false} inputName={'e-mail'} />
      </View>
      <EmailPasswordField isPassword={true} inputName={'senha'} />
      <TouchableOpacity
        style={styles.buttonEnter}
        onPress={() => navigation.navigate('Home')}>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
