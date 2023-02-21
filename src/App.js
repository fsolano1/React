import React from 'react';
import Navbar from './Components/NavBar';
import WorkImg from './Components/WorkImg';
import {BrowserRouter as Router, Routes, Route} from 
'react-router-dom';
import Home from './Components/Pages';
import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
      <Router>
         <Navbar />
         <ItemListContainer greeting="...Bienvenidos!"/>
         <WorkImg />
         <Routes>
          <Route path='/' exact element={Home} />
         </Routes>
      </Router>
  );
}

export default App;
