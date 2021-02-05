import useSwr from 'swr';
import axios from 'axios';
import { User } from 'src/@types/User';

export function useUser() {
  const fetcher = (url: any) =>
    axios({
      url,
      baseURL: process.env.REACT_APP_API_BASE_URL,
      withCredentials: true,
      method: 'GET',
    }).then((res) => res.data);

  const { data, mutate, error } = useSwr<User, any>('/api/v1/auth', fetcher, {
    suspense: false,
    shouldRetryOnError: false,
  });
  const loading = !data && !error;

  return {
    loading,
    data,
    mutate,
    error: error?.response,
  };
}

export default useUser;
