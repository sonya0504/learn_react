import React from 'react';
import './App.css';
import ClickCounterTwo from './components/clickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import RenderCounter from './components/RenderCounter';

function App() {
  return (
    <div className="App">
      <RenderCounter render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )
        }
      />

      <RenderCounter render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )
        }
      />
      
      {/* second way:
      <RenderCounter>
        {(count, incrementCount) => (
        <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </RenderCounter>  */}
      {/* <User render={ (isLoggedIn) =>  isLoggedIn ? "Tony Stark" : 'Guest' } /> */}
    </div>
  );
}

export default App;
