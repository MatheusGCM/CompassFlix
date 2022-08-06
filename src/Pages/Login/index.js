import React, {useContext, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
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
import {getToken, validateToken} from '../../service/api';
import {Context} from '../../context';

const Login = ({navigation}) => {
  const {setId} = useContext(Context);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    const getResponseToken = async () => {
      const response = await getToken();
      setToken(response.data.request_token);
    };
    getResponseToken();
  }, []);

  const login = async () => {
    if (email && password !== '') {
      const response = await validateToken(email, password, token);
      if (response) {
        const session_id = response.data.session_id;
        setId(session_id);
        navigation.replace('Home');
      }
    } else {
      Alert.alert('Atenção!!', 'Email ou senha inválidos');
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      touchSoundDisabled>
      <KeyboardAvoidingView behavior="height" style={styles.page}>
        <ImageBackground
          resizeMode="contain"
          style={styles.banner}
          source={require('../../assets/bannerLogin.png')}>
          {token ? (
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
              <TouchableOpacity style={styles.buttonEnter} onPress={login}>
                <Text style={styles.buttonText}>Entrar</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <ActivityIndicator
              size={50}
              color="#EC2626"
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          )}
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Login;
