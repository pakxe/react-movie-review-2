import {useInfiniteQuery} from '@tanstack/react-query';
import QUERY_KEYS from '../constants/queryKeys';
import axios from 'axios';
import getBrowserLanguage from '../utils/getBrowserLanguage';

const requestGetSearchMovies = async (pageParam: number, keyword: string) => {
  // TODO: 인자도 타입
  const response = await axios.get<ResultWithPage<Movie[]>>(`${import.meta.env.VITE_API_URL}/search/movie`, {
    params: {
      page: pageParam,
      query: keyword,
      language: getBrowserLanguage(),
    },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`,
    },
  });

  return response.data;
};

// TODO: 이름 바꾸기
const useGetSearchMovies = (keyword: string) => {
  const {data, ...rest} = useInfiniteQuery({
    queryKey: [QUERY_KEYS.MOVIE_LIST, QUERY_KEYS.POPULAR_MOVIE_LIST, keyword],
    queryFn: ({pageParam}) => requestGetSearchMovies(pageParam, keyword),
    initialPageParam: 1,
    getNextPageParam: lastPage => (lastPage.total_pages > lastPage.page ? lastPage.page + 1 : null),
  });

  return {
    movies: data?.pages.flatMap(page => page.results) ?? [],
    ...rest,
  };
};

export default useGetSearchMovies;
