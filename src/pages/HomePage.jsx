import React from "react";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="home-page__header">
        <h2 className="home-page__title">Travel Co</h2>
        <p className="home-page__subtitle">
          Discover amazing destinations and book your trip easily.
        </p>
      </header>
      <section className="home-page__features">
        <div className="home-page__feature">
          <img
            src="https://via.placeholder.com/150"
            alt="Explore Destinations"
            className="home-page__feature-image"
          />
          <h3 className="home-page__feature-title">Explore Destinations</h3>
          <p className="home-page__feature-description">
            Find the best destinations for your next trip.
          </p>
        </div>
        <div className="home-page__feature">
          <img
            src="https://via.placeholder.com/150"
            alt="Book Easily"
            className="home-page__feature-image"
          />
          <h3 className="home-page__feature-title">Book Easily</h3>
          <p className="home-page__feature-description">
            Reserve tickets and transport quickly and securely.
          </p>
        </div>
        <div className="home-page__feature">
          <img
            src="https://via.placeholder.com/150"
            alt="Enjoy Your Trip"
            className="home-page__feature-image"
          />
          <h3 className="home-page__feature-title">Enjoy Your Trip</h3>
          <p className="home-page__feature-description">
            Make memories with unforgettable journeys.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
