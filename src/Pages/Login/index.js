import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {EmailPasswordField} from '../../Components/EmailPasswordField';
import styles from './style';

const Login = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      touchSoundDisabled>
      <KeyboardAvoidingView
        behavior="height"
        style={styles.page}
        keyboardVerticalOffset={-20}>
        <ImageBackground
          resizeMode="contain"
          style={styles.banner}
          source={require('../../assets/bannerLogin.png')}>
          <View style={styles.pageContent}>
            <Image
              style={styles.logoContent}
              source={require('../../assets/logo.png')}
            />
            <View style={styles.boxContent}>
              <Text style={styles.loginText}>Login</Text>
              <Text style={styles.descriptionText}>
                Entre na sua conta para continuar.
              </Text>
            </View>
            <View style={styles.input}>
              <EmailPasswordField
                value={email}
                setValue={setEmail}
                isPassword={false}
                inputName={'e-mail'}
                iconName={'user'}
              />

              <EmailPasswordField
                value={password}
                setValue={setPassword}
                isPassword={true}
                inputName={'senha'}
                iconName={'lock'}
              />
            </View>
            <TouchableOpacity
              style={styles.buttonEnter}
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Login;
