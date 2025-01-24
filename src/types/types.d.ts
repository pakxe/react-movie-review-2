type Movie = {
  backdrop_path: string;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  id: number;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  poster_path: string;
  releaseDate: string;
  runtime: number;
  spokenLanguages: {
    englishName: string;
    iso6391: string;
    name: string;
  }[];
  tagline: string;
  title: string;
  vote_average: number;
};

type ResultWithPage<T> = {
  page: number;
  results: T;
  total_pages: number;
  total_results: number;
};
