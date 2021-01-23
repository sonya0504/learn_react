import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name='Diana' heroName='Wonder Woman' />
      <Welcome name='Bruce' heroName='Batman' />
      <Counter />
    </div>
  );
}

export default App;
