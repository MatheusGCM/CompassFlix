import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
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
import {api} from '../../service/api';
import styles from './style';

const Login = ({navigation}) => {
  const [sessionId, setSessionId] = useState();
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [isLoadingCredencials, setIsLoadingCredentials] = useState(true);
  const [key, setKey] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  useEffect(() => {
    api
      .get('/authentication/token/new?api_key=2782ff9318f8a759e57ab3e07291a495')
      .then(({data}) => {
        setKey(data.request_token);
        setIsLoadingPage(false);
      })
      .catch(err => alert('Erro no servidor'));
  }, []);

  const entrar = async () => {
    await api
      .post(
        '/authentication/token/validate_with_login?api_key=2782ff9318f8a759e57ab3e07291a495',
        {
          username: email,
          password: password,
          request_token: key,
        },
      )
      .then(response => console.log())
      .catch(err => alert('Usuario ou senha invalidos'));
    await api
      .post(
        '/authentication/session/new?api_key=2782ff9318f8a759e57ab3e07291a495',
        {
          request_token: key,
        },
      )
      .then(response => {
        setSessionId(response.data.session_id), navigation.replace('Home'); // para deslogar é necessario reiniciar o app no metro
      })
      .catch(err => alert('Usuario ou senha invalidos'));
  };
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
            {isLoadingPage ? (
              <ActivityIndicator color="#fff" size="large" />
            ) : (
              <View>
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
                  onPress={() => {
                    entrar();
                  }}>
                  <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Login;
