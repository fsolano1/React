import Navbar from './Components/NavBar';
import ItemDetailContainer from './Components/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 
'react-router-dom';
import Home from './Components/Pages';
import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
    <div className="container">
        <BrowserRouter>
         <Navbar />
         <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenidos a Shunsui Crochet!"/>}/>
          <Route path="/detalle/:idUser" element={<ItemDetailContainer />} />
          <Route path='/products' 
           element={<ItemListContainer greeting="Bienvenidos a Shunsui Crochet!"/>}
           />
           <Route path='/products/:idCategory' 
           element={<ItemListContainer greeting="Bienvenidos a Shunsui Crochet!"/>}
           />
         </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
