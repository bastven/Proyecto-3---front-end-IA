import React, { useState } from 'react';
import DOMPurify from 'dompurify';

const ObservationCard = ({ item, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [note, setNote] = useState(item.note || '');

  const handleSave = () => {
    // AI OPTIMIZATION: Using DOMPurify to sanitize HTML input, preventing XSS attacks.
    // This ensures that even if users input malicious scripts, they will be stripped out
    // before being saved to LocalStorage or rendered in the DOM.
    const cleanNote = DOMPurify.sanitize(note);
    onUpdate(item.date, cleanNote);
    setIsEditing(false);
  };

  return (
    <div className="observation-card">
      {item.media_type === 'video' ? (
        <iframe
          title="NASA Video"
          src={item.url}
          frameBorder="0"
          className="card-image"
        ></iframe>
      ) : (
        <img src={item.url} alt={item.title} className="card-image" />
      )}
      <div className="card-content">
        <h3 className="card-title">{item.title}</h3>
        <p className="card-date">{item.date}</p>
        
        {isEditing ? (
          <div className="note-editor">
            <textarea
              className="note-textarea"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Escribe tu nota de observación aquí..."
            />
            <div className="card-actions">
              <button className="btn btn-primary" onClick={handleSave}>Guardar</button>
              <button className="btn btn-secondary" onClick={() => {
                setNote(item.note || '');
                setIsEditing(false);
              }}>Cancelar</button>
            </div>
          </div>
        ) : (
          <>
            <div className="card-note" dangerouslySetInnerHTML={{ __html: item.note ? item.note : '<em>Sin notas de observación.</em>' }}></div>
            <div className="card-actions">
              <button className="btn btn-secondary" onClick={() => setIsEditing(true)}>
                {item.note ? 'Editar Nota' : 'Añadir Nota'}
              </button>
              <button className="btn btn-danger" onClick={() => onDelete(item.date)}>
                Eliminar
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ObservationCard;
