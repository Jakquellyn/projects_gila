import { OWNER_BEARER_TOKEN } from './env';
import type { ValidApiEndpoints } from './types/api';

export async function fetcher<T>(
  input: ValidApiEndpoints | Request,
  init?: RequestInit
): Promise<T> {
  const res = await fetch(input, {
    ...init,
    headers: {
      Authorization: `Bearer ${OWNER_BEARER_TOKEN}`
    }
  });

  const data = (await res.json()) as T;

  return data;
}
