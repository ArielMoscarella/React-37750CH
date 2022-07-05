import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Navbar/ItemListContainer';
import Item from './components/Navbar/Item';
import ItemDetail from './components/Navbar/ItemDetail';

export default function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer/> 
      <Item/>
      <ItemDetail/>
    </div>
  );
};
