import {RequestTokenResponse, SessionIdResponse} from 'src/types/auth';

import {api} from './api';

async function getRequestToken() {
  const {data} = await api.get<RequestTokenResponse>(
    '/authentication/token/new',
  );

  return data;
}

async function getSessionId(request_token: string) {
  const {data} = await api.post<SessionIdResponse>(
    '/authentication/session/new',
    {request_token},
  );

  return data;
}

export const auth = {
  getRequestToken,
  getSessionId,
};
