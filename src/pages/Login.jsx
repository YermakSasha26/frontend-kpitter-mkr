import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin } from '../redux/slices/auth';

const Login = () => {
  const [username, setUsername] = useState('user_1');
  const [password, setPassword] = useState('12345678');
  const { loginStatus, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchLogin({ username, password }));
  };

  useEffect(() => {
    if (loginStatus === 'succeeded') {
      navigate('/');
    }
  }, [loginStatus, navigate]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h2 className="text-center mt-5 mb-4">Вхід</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Ім'я користувача
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Пароль
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Увійти
            </button>
          </form>
          <div className="text-center mt-3">
            <Link to="/register">Ще не маєте аккаунту? Зареєструватися</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
