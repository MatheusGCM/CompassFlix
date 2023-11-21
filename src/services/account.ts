import {
  AccountStatesResponse,
  Midia,
  FavoriteResponse,
  AccountResponse,
  Favorite,
  Rated,
} from '@types';

import {api} from './api';

async function getAccount() {
  const {data} = await api.get<AccountResponse>('/account');

  return data;
}

async function getAccountStates(midiaType: Midia, midiaId: number) {
  const {data} = await api.get<AccountStatesResponse>(
    `/${midiaType}/${midiaId}/account_states`,
  );

  return data;
}

async function favorite(
  accountId: number,
  mediaId: number,
  mediaType: Midia,
  favorite: boolean,
) {
  const body = {
    media_type: mediaType,
    media_id: mediaId,
    favorite: favorite,
  };
  const {data} = await api.post<FavoriteResponse>(
    `/account/${accountId}/favorite`,
    body,
  );
  return data;
}

async function rating(mediaType: Midia, mediaId: number, value: number) {
  const {data} = await api.post(`/${mediaType}/${mediaId}/rating`, {value});

  return data;
}

async function getFavorite(accountId: number, mediaType: string) {
  const {data} = await api.get<Favorite>(
    `/account/${accountId}/favorite/${mediaType}`,
  );

  return data;
}

async function getRated(accountId: number, mediaType: string) {
  const {data} = await api.get<Rated>(
    `/account/${accountId}/rated/${mediaType}`,
  );

  return data;
}

export const account = {
  getAccount,
  getAccountStates,
  favorite,
  rating,
  getFavorite,
  getRated,
};
