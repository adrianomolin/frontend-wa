import { httpClient } from '../httpClient';

interface CreateUserParams {
  name: string;
  email: string;
  password: string;
  role: string;
}

export async function create(params: CreateUserParams) {
  const { data } = await httpClient.post('users', params);

  return data;
}
