import React from 'react';
import './App.css';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyle.css';
import styles from './appStyle.module.css';

function App() {
  return (
    <div className="App">
      <Stylesheet primary={true} />
      <Inline />
      <h2 className='error'>Error</h2>
      <h2 className={styles.success}>Success</h2>
    </div>
  );
}

export default App;
