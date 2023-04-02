import Navbar from './Components/NavBar';
import ItemDetailContainer from './Components/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 
'react-router-dom';
import Home from './Components/Pages';
import { CartContextProvider } from "./Context/cartContext";
import ItemListContainer from './Components/ItemListContainer';
import { initializeApp } from "firebase/app";
import CartContainer from "./Components/cartContainer";
import { exportDataWithBatch } from "./services/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvb4ulVkORhSto73VMD3xsFXuduJqf5s0",
  authDomain: "shunsuicrochet-dde0d.firebaseapp.com",
  projectId: "shunsuicrochet-dde0d",
  storageBucket: "shunsuicrochet-dde0d.appspot.com",
  messagingSenderId: "702986349723",
  appId: "1:702986349723:web:5b14b0e1e1e0568cfbea3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div className="container">
      <button onClick={exportDataWithBatch}>Export Data</button>
       <CartContextProvider>
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
              <Route path="/CarritoDeCompra" element={<CartContainer />} />
              <Route
              path="/checkout/:id"
              element={<h3>Gracias por tu compra</h3>}
            />
            </Routes>
        </BrowserRouter>
      </CartContextProvider>
      </div>
  );
}

export default App;
