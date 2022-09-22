import './App.css';
import {CountryProvider} from "./context/Country";
import Country from "./compo/Country";
import State from "./compo/State";
import City from "./compo/City";
import Rapor from './compo/Rapor';

function App() {

  return (
    <div className="App">
        <CountryProvider>
          <Country />
          <State />
          <City />
          <Rapor />
        </CountryProvider>
    </div>
  );
}

export default App;
