import React from 'react';
import './App.css';
import ComponentC from './components/ComponentC'

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {


  return (
    <div className="App">
      <UserContext.Provider value="hey You!">
        <ChannelContext.Provider value="You're gooood!">
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
