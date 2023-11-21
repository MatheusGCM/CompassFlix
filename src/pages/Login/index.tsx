import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Linking,
  Pressable,
  Text,
  View,
} from 'react-native';

import {useAccountContext} from '@context/account';
import {auth} from '@services';

import styles from './style';

import {getQueryParam, goToLink, storage} from '~utils';

const Login = () => {
  const {setCanPrivateStack} = useAccountContext();
  const [loading, setLoading] = useState<boolean>(false);

  const handleAuth = async () => {
    try {
      setLoading(true);
      const {request_token} = await auth.getRequestToken();
      if (request_token) {
        const url = `https://www.themoviedb.org/authenticate/${request_token}?redirect_to=app://compassflix`;
        goToLink(url);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleListenedURL = async (url: string) => {
    const requestToken = getQueryParam(url, 'request_token');
    const approved = getQueryParam(url, 'approved');

    if (requestToken && approved === 'true') {
      setCanPrivateStack(true);
      const {session_id} = await auth.getSessionId(requestToken); //salvar no storage mmkv
      storage.set('session_id', session_id);
    } else {
      console.log('sessão negada');
    }
  };

  useEffect(() => {
    const userData = storage.getString('@userData');
    if (userData) {
      setCanPrivateStack(true);
    }
    const subscribe = Linking.addEventListener('url', async e => {
      if (e.url) {
        handleListenedURL(e.url);
      }
    });
    return () => {
      subscribe.remove();
    };
  }, []);
  return (
    <View style={styles.page}>
      <ImageBackground
        resizeMode="contain"
        style={styles.banner}
        source={require('../../assets/bannerLogin.png')}>
        <View style={styles.pageContent}>
          <View>
            <Image
              style={styles.logoContent}
              source={require('../../assets/logo.png')}
            />
          </View>
          <Pressable style={styles.buttonEnter} onPress={handleAuth}>
            {loading ? (
              <ActivityIndicator color="white" size="small" />
            ) : (
              <Text style={styles.buttonText}>Entrar</Text>
            )}
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
