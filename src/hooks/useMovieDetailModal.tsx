import MovieDetailModal from '../components/MovieDetailModal/MovieDetailModal';
import MODAL_KEYS from '../constants/modalKeys';
import {useModalContext} from './useModal';

const useMovieDetailModal = (id: number) => {
  const {open} = useModalContext();

  return {
    open: () =>
      open(MODAL_KEYS.MOVIE_DETAIL, (isOpen, onClose) => (
        <MovieDetailModal isOpen={isOpen} onClose={onClose} id={id} />
      )),
  };
};

export default useMovieDetailModal;
