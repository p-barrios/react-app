import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route
            path='/'
            element= {
              <>
                <ItemListContainer/>
              </>
            }
          />
          <Route
            path='/category/:idCategory'
            element= {
              <>
                <ItemListContainer />
              </>
            }
          />
          <Route
            path='/item/:idItem'
            element= {
              <>
                <ItemDetailContainer />
              </>
            }
          />
          <Route
            path='/contact'
            element= {
              <>
                <h3>Page: Contact</h3>
              </>
            }
          />
          <Route
            path='/cart'
            element= {
              <>
                <Cart />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
