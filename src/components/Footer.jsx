import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h5 className="footer__title">KPI-tter</h5>
          <p className="footer__description">Ваш найкращий помічник у навчанні та спілкуванні.</p>
        </div>
        <div className="footer__section">
          <h6 className="footer__subtitle">Корисні посилання</h6>
          <ul className="footer__links">
            <li>
              <Link to="/" className="footer__link">
                Про нас
              </Link>
            </li>
            <li>
              <Link to="/" className="footer__link">
                Контакти
              </Link>
            </li>
            <li>
              <Link to="/" className="footer__link">
                Допомога
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__section footer__social">
          <h6 className="footer__subtitle">Ми в соціальних мережах</h6>
          <div className="footer__social-icons">
            <Link to="/" className="footer__social-icon">
              <FaFacebookF size={20} />
            </Link>
            <Link to="/" className="footer__social-icon">
              <FaTwitter size={20} />
            </Link>
            <Link to="/" className="footer__social-icon">
              <FaInstagram size={20} />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <small>&copy; {new Date().getFullYear()} KPI-tter. Всі права захищено.</small>
      </div>
    </footer>
  );
};

export default Footer;
