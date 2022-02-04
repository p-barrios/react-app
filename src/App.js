import React from 'react';
import './App.css';


// Import components

import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer item="Hola Mundo"/>
    </div>
  );
}

export default App;
