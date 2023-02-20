import React from 'react';
import Navbar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import {BrowserRouter as Router, Routes, Route} from 
'react-router-dom';
import Home from './Components/Pages';

function App() {
  return (
      <Router>
         <Navbar />
         <ItemListContainer />
         <Routes>
          <Route path='/' exact element={Home} />
         </Routes>
      </Router>
  );
}

export default App;
