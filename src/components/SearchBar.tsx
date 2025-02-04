import {useEffect, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import QUERY_PARAMETERS from '../constants/queryParameters';
import PATHS from '../constants/paths';

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
    <form className="search-box" onSubmit={handleSearch}>
      {isInputVisible && <input type="text" placeholder="검색" ref={ref} name={QUERY_PARAMETERS.QUERY} />}
      <button onClick={isInputVisible ? handleSearch : toggleInputVisible} className="search-button">
        검색
      </button>
    </form>
  );
};

export default SearchBar;
