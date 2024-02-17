
import React, { useState } from 'react';
import Counter from './Counter';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <h1>React Counter App</h1>
      <Counter />
    </div>
  );
};

export default App;
