import React, { useReducer } from 'react';
import './App.css';
import ComponentA from './components/useReducer/ComponentA';
import ComponentB from './components/useReducer/ComponentB';
import ComponentC from './components/useReducer/ComponentC';

export const CounterContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1;
        case 'decrement' :
            return state - 1;
        case 'reset' :
            return initialState
    }
}


function App() {

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <CounterContext.Provider value={{countState: count, countDispatch: dispatch}}>
        Global Count: {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CounterContext.Provider>
      
    </div>
  );
}

export default App;
