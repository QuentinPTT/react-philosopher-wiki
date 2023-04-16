import React from 'react';
import './App.css';
import philosophersData from './philosophers.json';
import PhilosopherList from './components/PhilosopherList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PhiloFlash</h1>
      </header>
      <main>
        <PhilosopherList philosophers={philosophersData} />
      </main>
    </div>
  );
}

export default App;
