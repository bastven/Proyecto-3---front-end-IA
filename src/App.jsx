import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchForm from './components/SearchForm';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  const [currentApod, setCurrentApod] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [savedItems, setSavedItems] = useState(() => {
    // AI OPTIMIZATION: Initialize state from LocalStorage on first render
    // to avoid layout shifts or unnecessary re-renders when data is already available.
    try {
      const stored = localStorage.getItem('astroTrackerJournal');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error("Error parsing local storage data", e);
      return [];
    }
  });

  const API_KEY = 'DEMO_KEY'; // Ideally this should be in .env, but using DEMO_KEY for simplicity

  // Fetch initial APOD
  useEffect(() => {
    fetchApod();
  }, []);

  // Sync savedItems to LocalStorage whenever they change
  useEffect(() => {
    localStorage.setItem('astroTrackerJournal', JSON.stringify(savedItems));
  }, [savedItems]);

  const fetchApod = async (date = '') => {
    setIsLoading(true);
    setError(null);
    try {
      const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}${date ? `&date=${date}` : ''}`;
      const response = await fetch(url);
      
      // AI OPTIMIZATION: Explicitly checking response.ok to handle HTTP errors
      // since fetch doesn't throw on 4xx/5xx responses.
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      
      const data = await response.json();
      setCurrentApod(data);
    } catch (err) {
      setError('No se pudo cargar la imagen. Por favor, intenta con otra fecha.');
      setCurrentApod(null);
    } finally {
      setIsLoading(false);
    }
  };

  // CRUD Operations
  const handleSave = (apod) => {
    setSavedItems((prevItems) => {
      // Check if already saved
      if (prevItems.some(item => item.date === apod.date)) {
        return prevItems; // Already saved
      }
      return [{ ...apod, note: '' }, ...prevItems];
    });
  };

  const handleUpdateNote = (date, note) => {
    setSavedItems((prevItems) =>
      prevItems.map((item) =>
        item.date === date ? { ...item, note } : item
      )
    );
  };

  const handleDelete = (date) => {
    setSavedItems((prevItems) => prevItems.filter((item) => item.date !== date));
  };

  return (
    <div className="app-container">
      <Navbar />
      
      <main>
        <SearchForm onSearch={fetchApod} />

        {isLoading ? (
          <div className="spinner-container">
            <div className="spinner"></div>
            <p style={{marginLeft: '15px', color: 'var(--yellow)', fontWeight: 'bold'}}>Cargando...</p>
          </div>
        ) : error ? (
          <div className="error-message">
            {error}
          </div>
        ) : (
          <Hero apod={currentApod} onSave={handleSave} />
        )}

        <Gallery 
          items={savedItems} 
          onUpdate={handleUpdateNote} 
          onDelete={handleDelete} 
        />
      </main>
    </div>
  );
}

export default App;
