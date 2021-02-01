import React from 'react';
import './App.css';
import ErrorBundary from './components/ErrorBoundary';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <ErrorBundary>
        <Hero heroName="Batman" />
      </ErrorBundary>

      <ErrorBundary>
        <Hero heroName="Superman" />
      </ErrorBundary>
      
      <ErrorBundary>
        <Hero heroName="Joker" />
      </ErrorBundary>
    </div>
  );
}

export default App;
