import React from 'react';
import './App.css';
import Header from './Header';
import BowlersTable from './BowlersTable';

function App() {
  return (
    <div className="App">
      <Header title="Full Stack React & ASP.NET" />
      <br />
      <BowlersTable />
    </div>
  );
}

export default App;
