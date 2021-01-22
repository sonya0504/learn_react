import './App.css';

// for named export
// import { Greet } from './components/Greet';

// for default export:
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
    </div>
  );
}

export default App;
