import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DisplayGrid from './DisplayGrid'
import Nav from './Navigator'
import Footer from'./Footer'

function App() {
  return (
    <div>
      <header >
        <Nav></Nav>
      </header>
        <DisplayGrid></DisplayGrid>
        <Footer></Footer>
    </div>
  );
}

export default App;
