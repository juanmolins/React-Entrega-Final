import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="d-flex container">
      <ItemListContainer Imagen="/images/especial.PNG" Pizza="Especial" Ingredientes="Jamón, muzzarella y morrones" Precio="$ 2.500" />
      <ItemListContainer Imagen="/images/napolitana.PNG" Pizza="Napolitana" Ingredientes="Muzzarella, tomates y ajo" Precio="$ 2.400" />
      </div>
    </div>
  );
}

export default App;
