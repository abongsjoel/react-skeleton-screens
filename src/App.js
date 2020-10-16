import React from 'react';
import Article from './components/Article';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <header>
        <h1>React Skeletons</h1>
      </header>
      <div className="content">
        <Article />
        <User />
      </div>
    </div>
  );
}

export default App;
