import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url) => axios.get(import.meta.env.VITE_URLAPI + url).then(res => res.data)


export function GetLastNews() {
  const { data, error } = useSWR('/api/news/recent', fetcher, { fallbackData: [] })

  return {
    News: data.news,
    isLoading: !error && !data.news,
    isError: error,
  }
}

export function GetSearchNews(query) {
  const { data, error } = useSWR(`/api/news/search/${query}`, fetcher, { fallbackData: [] })

  return {
    News: data.news,
    isLoading: !error && !data.news,
    isError: error,
  }
}