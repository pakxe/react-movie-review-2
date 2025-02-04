import {css} from '@emotion/react';
import logo from '../../public/assets/logo.png';
import SearchBar from './SearchBar';
import {useNavigate} from 'react-router-dom';
import PATHS from '../constants/paths';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header
      css={css`
        width: 100%;
        height: 72px;
        background-color: #222;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
        border-bottom: 1px solid white;
        margin-bottom: 48px;
      `}
    >
      <h1
        onClick={() => navigate(PATHS.HOME)}
        css={css`
          cursor: pointer;
          user-select: none;
          font-size: 2rem;
          font-weight: bold;
          letter-spacing: -0.1rem;
          color: #f33f3f;
        `}
      >
        <img src={logo} alt="MovieList 로고" />
      </h1>
      <SearchBar />
    </header>
  );
};

export default Header;
