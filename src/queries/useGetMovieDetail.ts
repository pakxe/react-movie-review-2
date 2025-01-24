import {useQuery} from '@tanstack/react-query';
import QUERY_KEYS from '../constants/queryKeys';
import axios from 'axios';
import getBrowserLanguage from '../utils/getBrowserLanguage';

const requestGetMovieDetail = async (id: number) => {
  const response = await axios.get<Movie>(`${import.meta.env.VITE_API_URL}/movie/${id}`, {
    params: {
      language: getBrowserLanguage(),
    },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`,
    },
  });

  return response.data;
};

const useGetMovieDetail = (id: number) => {
  const {data, ...rest} = useQuery({
    queryKey: [QUERY_KEYS.MOVIE_DETAIL, id],
    queryFn: () => requestGetMovieDetail(id),
  });

  return {
    movieDetail: data,
    ...rest,
  };
};

export default useGetMovieDetail;
