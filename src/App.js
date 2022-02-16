import React from 'react';
import './App.css';


// Import components

import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <ItemListContainer/> */}

      <ItemDetailContainer/>
    </div>
  );
}

export default App;
