import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/auth';
import { fetchMe } from '../redux/slices/auth';
import { RiLogoutCircleRLine, RiAddCircleLine, RiUserLine, RiEarthLine } from 'react-icons/ri'; // Іконки з react-icons

const Header = () => {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const { userData } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    setIsLoggedIn(false);
    navigate('/login');
  };

  React.useEffect(() => {
    const token = Cookies.get('auth_token');
    if (token) {
      setIsLoggedIn(true);
      dispatch(fetchMe({ token }));
    }
  }, [dispatch]);

  return (
    <header className="header">
      <div className="header__container">
        {/* Логотип і назва */}
        <Link to="/" className="header__logo">
          <RiEarthLine size={24} className="header__logo-icon" />
          <h1 className="header__title">KPI-tter</h1>
        </Link>

        {/* Меню */}
        <div className="header__menu">
          {isLoggedIn ? (
            <>
              <Link to="/create-post" className="header__button header__button--create-post">
                <RiAddCircleLine size={20} className="header__button-icon" /> Створити пост
              </Link>
              <Link
                to={`/profile/${userData?.username}`}
                className="header__button header__button--profile">
                <RiUserLine size={20} className="header__button-icon" /> {userData?.username}
              </Link>
              <button
                className="header__button header__button--logout"
                onClick={handleLogout}
                title="Вийти">
                <RiLogoutCircleRLine size={20} /> Вийти
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="header__button header__button--login" title="Увійти">
                <RiUserLine size={20} className="header__button-icon" /> Увійти
              </Link>
              <Link
                to="/register"
                className="header__button header__button--register"
                title="Створити аккаунт">
                <RiAddCircleLine size={20} className="header__button-icon" /> Реєстрація
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
