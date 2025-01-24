import {useInfiniteQuery} from '@tanstack/react-query';
import QUERY_KEYS from '../constants/queryKeys';
import axios from 'axios';
import getBrowserLanguage from '../utils/getBrowserLanguage';

const requestGetPopularMovies = async (pageParam: number) => {
  const response = await axios.get<ResultWithPage<Movie[]>>(`${import.meta.env.VITE_API_URL}/movie/popular`, {
    params: {
      page: pageParam,
      language: getBrowserLanguage(),
    },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`,
    },
  });

  return response.data;
};

const useGetPopularMovies = () => {
  const {data, ...rest} = useInfiniteQuery({
    queryKey: [QUERY_KEYS.MOVIE_LIST, QUERY_KEYS.POPULAR_MOVIE_LIST],
    queryFn: ({pageParam}) => requestGetPopularMovies(pageParam),
    initialPageParam: 1,
    getNextPageParam: lastPage => (lastPage.total_pages > lastPage.page ? lastPage.page + 1 : null),
  });

  return {
    movies: data?.pages.flatMap(page => page.results) ?? [],
    ...rest,
  };
};

export default useGetPopularMovies;
