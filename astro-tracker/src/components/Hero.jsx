import React from 'react';

const Hero = ({ apod, onSave }) => {
  if (!apod) return null;

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-image-container">
          {apod.media_type === 'video' ? (
            <iframe
              title="NASA Video"
              src={apod.url}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="hero-image"
            ></iframe>
          ) : (
            <img src={apod.url} alt={apod.title} className="hero-image" />
          )}
        </div>
        <div className="hero-info">
          <h1 className="hero-title">{apod.title}</h1>
          <p className="hero-date">{apod.date}</p>
          <div className="hero-description">
            <p>{apod.explanation}</p>
          </div>
          <button className="btn btn-secondary" onClick={() => onSave(apod)}>
            <span role="img" aria-label="star">⭐</span> Guardar en Favoritos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
