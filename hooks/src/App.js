import React from 'react';
import './App.css';
import DocTitleOne from './components/customHook/DocTitleOne';
import DocTitleTwo from './components/customHook/DocTitleTwo';

function App() {

  return (
    <div className="App">
      <DocTitleOne />
      <DocTitleTwo />
    </div>
  );
}

export default App;
