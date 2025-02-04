import {useEffect, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import QUERY_PARAMETERS from '../constants/queryParameters';
import PATHS from '../constants/paths';
import {css} from '@emotion/react';
import searchIcon from '../../public/assets/search_button.png';

const SearchBar = () => {
  const [isInputVisible, setIsInputVisible] = useState(window.innerWidth >= 768);
  const ref = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const keyword = ref.current?.value;
    if (!keyword) return;

    navigate(`${PATHS.SEARCH}?${QUERY_PARAMETERS.QUERY}=${keyword}`);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsInputVisible(false);
      } else {
        setIsInputVisible(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleInputVisible = () => {
    setIsInputVisible(prev => !prev);
  };

  return (
    <form
      css={css`
        background: #fff;
        padding: 8px;
        border-radius: 4px;
      `}
      onSubmit={handleSearch}
    >
      {isInputVisible && (
        <input
          css={css`
            border: 0;
          `}
          type="text"
          placeholder="검색"
          ref={ref}
          name={QUERY_PARAMETERS.QUERY}
        />
      )}
      <button
        onClick={isInputVisible ? handleSearch : toggleInputVisible}
        css={css`
          width: 14;
          border: 0;
          text-indent: -1000;
          color: transparent;
          background: url('${searchIcon}') transparent no-repeat 0 1px;
          background-size: contain;
        `}
      >
        검색
      </button>
    </form>
  );
};

export default SearchBar;
