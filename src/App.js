import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import Especial from './images/especial.PNG';
import Napolitana from './images/napolitana.PNG'


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div class="d-flex container">
      <ItemListContainer Imagen= { Especial } Pizza="Especial" Ingredientes="Jamón, muzzarella y morrones" Precio="$ 2.500" />
      <ItemListContainer Imagen= { Napolitana } Pizza="Napolitana" Ingredientes="Muzzarella, tomates, aceite y ajo" Precio="$ 2.400" />
      </div>
    </div>
  );
}

export default App;
