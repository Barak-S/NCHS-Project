import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DisplayGrid from './DisplayGrid'
import Nav from './Navigator'

function App() {
  return (
    <div>
      <header >
        <Nav></Nav>
      </header>
        <DisplayGrid></DisplayGrid>
    </div>
  );
}

export default App;
