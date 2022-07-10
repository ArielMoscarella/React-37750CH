import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Navbar/ItemListContainer';
import Item from './components/Navbar/Item';
import ItemDetail from './components/Navbar/ItemDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/Navbar/ItemDetailContainer';
import Footer from './components/Navbar/Footer';
import "../src/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    
    <div>
      <>
        <BrowserRouter>
          <div><Navbar/></div>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:id' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
          </Routes>
          <div><Footer/></div>
        </BrowserRouter>
      </>
      
      <Item/>
      <ItemDetail/>
    </div>
  );
};
