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
          console.warn('Erro no servidor');
        }),
    )
    .catch(error => {
      console.log(error);
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

export const postRatedFilm = async (
  session_id,
  id,
  media_type,
  media_id,
  favorite,
) => {
  return api
    .post(
      `/account/${id}/favorite?api_key=${api_key}&session_id=${session_id}`,
      {
        media_type: media_type,
        media_id: media_id,
        favorite: favorite,
      },
    )
    .catch(error => {
      console.warn('error na api');
    });
};

export const postRatingFilm = async (movie_id, session_id, value) => {
  return api.post(
    `/movie/${movie_id}/rating?api_key=${api_key}&session_id=${session_id}`,
    {
      value: value,
    },
  );
};

// Requisições das series

export const getSeries = async page => {
  return api
    .get(`/tv/popular?api_key=${api_key}&language=pt-BR&page=${page}`)
    .catch(error => {
      console.warn('Erro ao buscar séries');
    });
};

export const getSeriesDetails = async id => {
  return api.get(`/tv/${id}?api_key=${api_key}&language=pt-BR`).catch(error => {
    console.warn('Erro ao buscar detalhes das séries');
  });
};

export const getSeriesDetailsSeason = async (id, season) => {
  return api
    .get(`/tv/${id}/season/${season}?api_key=${api_key}&language=pt-BR`)
    .catch(error => {
      console.warn('Erro ao buscar detalhes das séries');
    });
};

export const getMovieDetailsPlus = async (movie_id, id) => {
  return api
    .get(
      `/movie/${movie_id}/account_states?api_key=${api_key}&session_id=${id}`,
    )
    .catch(error => {
      console.warn('erro na api');
    });
};

export const getSeriesDetailsPlus = async (serie_id, id) => {
  return api.get(
    `/tv/${serie_id}/account_states?api_key=${api_key}&session_id=${id}`,
  );
};

export const postRatingSerie = async (serie_id, session_id, value) => {
  return api.post(
    `/tv/${serie_id}/rating?api_key=${api_key}&session_id=${session_id}`,
    {
      value: value,
    },
  );
};

export default api;
