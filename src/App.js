import React from 'react';
import NameForm from './components/NameForm/NameForm';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="app__header">
        <div className="app__logo">
          <svg viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <h1 className="app__title">Full Name Display</h1>
        <p className="app__subtitle">
          Enter your name below and see it come to life
        </p>
      </header>

      {/* Name Form Component */}
      <NameForm />
    </div>
  );
}

export default App;
