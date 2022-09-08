import axios from 'axios';

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

export const rate = async (midia, movie_id, session_id, value) => {
  return api
    .post(
      `/${midia}/${movie_id}/rating?api_key=${api_key}&session_id=${session_id}`,
      {
        value: value,
      },
    )
    .catch(error => {
      console.warn('Erro na avaliação');
    });
};

export const getAccountStates = async (midia, movie_id, session_id) => {
  return api
    .get(
      `/${midia}/${movie_id}/account_states?api_key=${api_key}&session_id=${session_id}`,
    )
    .catch(error => {
      console.warn('Erro na avaliação');
    });
};

export const markFavorite = async (userId, session_id, midia, midiaId) => {
  return api
    .post(
      `/account/${userId}/favorite?api_key=${api_key}&session_id=${session_id}`,
      {
        media_type: midia,
        media_id: midiaId,
        favorite: true,
      },
    )
    .catch(error => {
      console.warn('Erro na avaliação');
    });
};

export const unmarkFavorite = async (userId, session_id, midia, midiaId) => {
  return api
    .post(
      `/account/${userId}/favorite?api_key=${api_key}&session_id=${session_id}`,
      {
        media_type: midia,
        media_id: midiaId,
        favorite: false,
      },
    )
    .catch(error => {
      console.warn(error, 'Erro na avaliação');
    });
};

export const createListFilms = async (session_id, name, description) => {
  return api
    .post(
      `https://api.themoviedb.org/3/list?api_key=${api_key}&session_id=${session_id}`,
      {
        name: name,
        description: description,
        language: 'pt-BR',
      },
    )
    .catch(error => console.warn(error, 'Erro na api'));
};

export const addMovieList = async (session_id, media_id, list_id) => {
  return api
    .post(
      `https://api.themoviedb.org/3/list/${list_id}/add_item?api_key=${api_key}&session_id=${session_id}`,
      {
        media_id: media_id,
      },
    )
    .catch(error => console.warn(error, 'Erro na api'));
};

export const removeMovieList = async (session_id, media_id, list_id) => {
  return api
    .post(
      `https://api.themoviedb.org/3/list/${list_id}/remove_item?api_key=${api_key}&session_id=${session_id}`,
      {
        media_id: media_id,
      },
    )
    .catch(error => console.warn(error, 'Erro na api'));
};

export const deleteListFilm = async (session_id, media_id, list_id) => {
  return api.delete(
    `https://api.themoviedb.org/3/list/${list_id}?api_key=${api_key}&session_id=${session_id}`,
    {
      media_id: media_id,
    },
  );
};

export const getFilmsDetailsList = async list_id => {
  return api
    .get(
      `https://api.themoviedb.org/3/list/${list_id}?api_key=${api.key}&language=pt-BR`,
    )
    .catch(error => console.warn(error, 'Erro na api'));
};
export default api;

export const getUserList = async (account_id, session_id) => {
  return api
    .get(
      `https://api.themoviedb.org/3/account/${account_id}/lists?api_key=${api_key}&language=pt-BR&session_id=${session_id}&page=1`,
    )
    .catch(error => console.warn(error, 'Erro na api'));
};
