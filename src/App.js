import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>✨ Welcome to Leo's World 🌟</h1>
      </header>
      
      <main className="main-content">
        <section className="video-section">
          <h2>My Hockey Journey</h2>
          <div className="video-container">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/QX8xIJ2pNz4"
              title="Hockey Game Highlights"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="video-caption">
            Watch me in action on the ice, showcasing the passion and intensity of hockey.
          </p>
        </section>
      </main>

      <footer className="app-footer">
        <p> 🏒 2024 • Built with passion ❤️</p>
      </footer>
    </div>
  );
}

export default App;
