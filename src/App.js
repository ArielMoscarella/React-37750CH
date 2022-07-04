import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Navbar/ItemListContainer';
import Item from './components/Navbar/Item';

export default function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer/> 
      <Item/>
    </div>
  );
};
