import './App.css';
// for named export
// import { Greet } from './components/Greet';
// for default export:
import Greet from './components/Greet'

function App() {
  return (
    <div className="App">
      <Greet />
    </div>
  );
}

export default App;
