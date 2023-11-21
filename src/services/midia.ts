import {
  Midia,
  MidiaDetailsResponse,
  MidiaResponse,
  MovieCreditsResponse,
  SeasonResponse,
} from '@types';

import {api} from './api';

async function getDetails(midiaType: Midia, midiaId: number) {
  const {data} = await api.get<MidiaDetailsResponse>(
    `/${midiaType}/${midiaId}?language=pt-BR`,
  );

  return data;
}

async function getPopularList(midiaType: Midia, page: number) {
  const {data} = await api.get<MidiaResponse>(
    `/${midiaType}/popular?page=${page}&language=pt-BR`,
  );

  return data;
}

async function getMovieCredits(movieId: number) {
  const {data} = await api.get<MovieCreditsResponse>(
    `/movie/${movieId}/credits?language=pt-BR`,
  );

  return data;
}

async function getSeriesDetailsSeason(serieId: number, seasonNumber: number) {
  const {data} = await api.get<SeasonResponse>(
    `/tv/${serieId}/season/${seasonNumber}?language=pt-BR`,
  );
  return data;
}

export const midia = {
  getDetails,
  getPopularList,
  getMovieCredits,
  getSeriesDetailsSeason,
};
