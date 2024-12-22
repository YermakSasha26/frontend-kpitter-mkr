import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main className="main-content">
        <div className="main-content__intro">
          <h2 className="main-content__title">Вітаємо на нашому сайті!</h2>
          <p className="main-content__description">Тут ви можете знайти цікаві функції.</p>
        </div>
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
