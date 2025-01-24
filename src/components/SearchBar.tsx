import {useRef} from 'react';
import {useNavigate} from 'react-router-dom';

const SearchBar = () => {
  const ref = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    const keyword = ref.current?.value;
    if (!keyword) return;

    navigate(`/${keyword}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch(); // Enter 키를 누르면 검색
    }
  };

  return (
    <div className="search-box">
      <input type="text" placeholder="검색" ref={ref} onKeyDown={handleKeyDown} />
      <button onClick={handleSearch} className="search-button">
        검색
      </button>
    </div>
  );
};

export default SearchBar;
