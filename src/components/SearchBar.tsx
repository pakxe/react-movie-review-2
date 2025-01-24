import {useEffect, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';

const SearchBar = () => {
  const [isInputVisible, setIsInputVisible] = useState(window.innerWidth >= 768);
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
    <div className="search-box">
      {isInputVisible && <input type="text" placeholder="검색" ref={ref} onKeyDown={handleKeyDown} />}
      <button onClick={isInputVisible ? handleSearch : toggleInputVisible} className="search-button">
        검색
      </button>
    </div>
  );
};

export default SearchBar;
