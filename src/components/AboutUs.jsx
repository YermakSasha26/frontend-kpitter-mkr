import React from 'react';
import { FaUsers, FaPenFancy, FaHeart, FaCommentDots, FaSmile } from 'react-icons/fa';

function AboutUs() {
  return (
    <section className="about-us">
      <h3 className="about-us__title">
        Про наш сайт <FaSmile className="about-us__icon" />
      </h3>
      <p className="about-us__description">
        Ми створили <span className="about-us__highlight">KPI-tter</span>, щоб допомогти вам
        знаходити цікаві матеріали, ділитися знаннями та обговорювати їх із іншими користувачами. 🚀
      </p>

      <div className="about-us__cards">
        <div className="about-us__card">
          <FaUsers size={40} className="about-us__card-icon about-us__card-icon--primary" />
          <h5 className="about-us__card-title">Спільнота</h5>
          <p className="about-us__card-text">
            Приєднуйтесь до нашої дружньої спільноти та знайдіть однодумців! 🤝
          </p>
        </div>

        <div className="about-us__card">
          <FaPenFancy size={40} className="about-us__card-icon about-us__card-icon--secondary" />
          <h5 className="about-us__card-title">Створюйте пости</h5>
          <p className="about-us__card-text">
            Діліться своїми думками, історіями та знаннями з іншими. 📝
          </p>
        </div>

        <div className="about-us__card">
          <FaHeart size={40} className="about-us__card-icon about-us__card-icon--danger" />
          <h5 className="about-us__card-title">Лайки та підтримка</h5>
          <p className="about-us__card-text">
            Підтримуйте інших користувачів, ставлячи лайки їх матеріалам! ❤️
          </p>
        </div>

        <div className="about-us__card">
          <FaCommentDots size={40} className="about-us__card-icon about-us__card-icon--info" />
          <h5 className="about-us__card-title">Коментарі</h5>
          <p className="about-us__card-text">
            Обговорюйте, ставте запитання та залишайте свої враження. 💬
          </p>
        </div>
      </div>

      <p className="about-us__conclusion">
        Насолоджуйтесь зручним інтерфейсом та широкими можливостями{' '}
        <FaSmile className="about-us__icon" />!
      </p>
    </section>
  );
}

export default AboutUs;
