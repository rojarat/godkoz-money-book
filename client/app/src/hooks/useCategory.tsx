import useSwr from "swr";
import axios from "axios";
import { Category } from "src/@types/Category";

export function useCategory() {
  function GetAll() {
    const fetcher = (url: any) =>
      axios({
        url,
        baseURL: process.env.REACT_APP_API_BASE_URL,
        withCredentials: true,
        method: "GET",
      }).then((res) => res.data);

    const { data, mutate, error } = useSwr<Category[], any>(
      "/api/v1/categories",
      fetcher,
      {
        suspense: false,
        shouldRetryOnError: false,
      }
    );
    const loading = !data && !error;
    return {
      loading,
      data,
      mutate,
      error: error?.response,
    };
  }
  return { GetAll };
}
export default useCategory;
