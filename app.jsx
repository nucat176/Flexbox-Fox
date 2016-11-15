import React from 'react';

const App = ({children}) => (
  <div className="app">
    <h1 className="game-title">Flexbox Fox</h1>
    {children}
  </div>
);

export default App;
