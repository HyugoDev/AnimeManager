import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url) => axios.get(import.meta.env.VITE_URLAPI + url).then(res => res.data)


export function GetLastAnime() {
  const { data, error } = useSWR(`/api/anime/lastepisodes`, fetcher, { fallbackData: [] })

  return {
    Animes: data.episodes,
    isLoading: !error && !data.episodes,
    isError: error,
  }
}


export function GetDirectorio() {
  const { data, error } = useSWR('/api/anime/directory', fetcher, { fallbackData: [] })

  return {
    Animes: data.directory,
    isLoading: !error && !data.directory,
    isError: error,
  }
}


export function GetDirectorioFuturo() {
  const { data, error } = useSWR('/api/anime/future', fetcher, { fallbackData: [] })

  return {
    Animes: data.future,
    isLoading: !error && !data.future,
    isError: error,
  }
}

// /** 
// @param id id del anime
// @description  Obtiene los datos del anime
// */
export function GetAnime(id) {
  const { data, error } = useSWR(`/api/anime/animeinfo/${id}`, fetcher, { fallbackData: [] })

  return {
    Info: data.info,
    Episodio: data.episodes,
    isLoading: !error && !data.info,
    isError: error,
  }
}


// /** 
// @param id id del Episodio
// @description  Obtiene los videos del Episodio
// */
export function GetVerEpisodio(id) {
  const { data, error } = useSWR(`/api/anime/watch/${id}`, fetcher, { fallbackData: [] })



  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  }
}


export function GetSearchAnime(query) {
  const { data, error } = useSWR(`/api/anime/search/${query}`, fetcher, { fallbackData: [] })

  return {
    Anime: data.results,
    isLoading: !error && !data,
    isError: error,
  }
}