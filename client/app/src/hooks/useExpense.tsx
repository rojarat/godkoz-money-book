import useSwr from "swr";
import axios from "axios";
import { Expense } from "src/@types/Expense";

export function useExpense() {
  function GetAll() {
    const fetcher = (url: any) =>
      axios({
        url,
        baseURL: process.env.REACT_APP_API_BASE_URL,
        withCredentials: true,
        method: "GET",
      }).then((res) => res.data);

    const { data, mutate, error } = useSwr<Expense, any>(
      "/api/v1/expense",
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
export default useExpense;
