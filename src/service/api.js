import axios from 'axios';
import {Alert} from 'react-native';

const api_key = '53324f99056d3d75ddf758aad3ec3855';
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const getToken = async () => {
  return api
    .get(`/authentication/token/new?api_key=${api_key}`)
    .catch(error => {
      console.warn('Deu pauuu');
    });
};

export const validateToken = async (email, password, token) => {
  return api
    .post(`/authentication/token/validate_with_login?api_key=${api_key}`, {
      username: email,
      password: password,
      request_token: token,
    })
    .then(response =>
      api
        .post(`/authentication/session/new?api_key=${api_key}`, {
          request_token: response.data.request_token,
        })
        .catch(error => {
          Alert.alert('Atenção!!', 'Email ou senha inválidos');
        }),
    )
    .catch(error => {
      Alert.alert('Atenção!!', 'Email ou senha inválidos');
    });
};

export const getAccount = async session_id => {
  return api
    .get(`/account?api_key=${api_key}&session_id=${session_id}`)
    .catch(error => {
      console.warn('Deu pauu na busca do usuario ');
    });
};
export const getMovies = async page => {
  return api
    .get(`/movie/popular?api_key=${api_key}&language=pt-BR&page=${page}`)
    .catch(error => {
      console.warn('Deu pauu na busca dos filmes');
    });
};

export const getMoviesDetails = async id => {
  return api
    .get(`/movie/${id}?api_key=${api_key}&language=pt-BR`)
    .catch(error => {
      console.warn('Deu pauu na busca dos detalhes do filme');
    });
};

export const getMovieCredits = async id => {
  return api
    .get(`/movie/${id}/credits?api_key=${api_key}&language=pt-BR`)
    .catch(error => {
      console.warn('error na api');
    });
};

export const getFavoriteMovie = async (session_id, id) => {
  return api
    .get(
      `/account/${id}/favorite/movies?api_key=${api_key}&session_id=${session_id}`,
    )
    .catch(error => {
      console.warn('error na api');
    });
};

export const getFavoriteSeries = async (session_id, id) => {
  return api
    .get(
      `/account/${id}/favorite/tv?api_key=${api_key}&session_id=${session_id}`,
    )
    .catch(error => {
      console.warn('error na api');
    });
};

export const getRatedMovie = async (session_id, id) => {
  return api
    .get(
      `/account/${id}/rated/movies?api_key=${api_key}&session_id=${session_id}`,
    )
    .catch(error => {
      console.warn('error na api');
    });
};

export const getRatedSeries = async (session_id, id) => {
  return api
    .get(`/account/${id}/rated/tv?api_key=${api_key}&session_id=${session_id}`)
    .catch(error => {
      console.warn('error na api');
    });
};

export default api;
