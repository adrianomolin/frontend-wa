import { httpClient } from '../httpClient';

interface SigninParams {
  email: string;
  password: string;
}

interface SigninResponse {
  token: string;
}

export async function signin(params: SigninParams) {
  const { data } = await httpClient.post<SigninResponse>('auth', params);

  return {
    accessToken: data.token
  };
}
