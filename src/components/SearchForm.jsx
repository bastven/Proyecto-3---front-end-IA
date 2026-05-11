import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date) {
      onSearch(date);
    }
  };

  // Get today's date in YYYY-MM-DD format for max date validation
  const today = new Date().toISOString().split('T')[0];

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="date"
        className="date-input"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        max={today}
        required
      />
      <button type="submit" className="btn btn-primary">
        Buscar por Fecha
      </button>
    </form>
  );
};

export default SearchForm;
