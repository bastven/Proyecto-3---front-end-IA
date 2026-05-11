import React from 'react';
import ObservationCard from './ObservationCard';

const Gallery = ({ items, onUpdate, onDelete }) => {
  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Mi Diario de Observación</h2>
      {items.length === 0 ? (
        <p style={{ color: 'var(--text-muted)' }}>Aún no has guardado ningún hallazgo en tu diario.</p>
      ) : (
        <div className="gallery-grid">
          {items.map((item) => (
            <ObservationCard
              key={item.date}
              item={item}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Gallery;
