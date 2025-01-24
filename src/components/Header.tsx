import {css} from '@emotion/react';
import logo from '../../public/assets/logo.png';
import SearchBar from './SearchBar';
import {useNavigate} from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header
      css={css`
        width: 100%;
        padding: 16px;
      `}
    >
      <h1 onClick={() => navigate('/')}>
        <img src={logo} alt="MovieList 로고" />
      </h1>
      <SearchBar />
    </header>
  );
};

export default Header;
