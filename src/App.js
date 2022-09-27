import './App.css';
import {CountryProvider} from "./context/Country";
import Country from "./compo/Country";
import State from "./compo/State";
import City from "./compo/City";
import Rapor from './compo/Rapor';

function App() {

  return (
    <div className="App">
        <h1>ber-to-weather</h1>
        <CountryProvider>
          <div className='flex'>
            <div className='marg' ><Country /></div>
            <State />
            <City />
          </div>
          <Rapor />
        </CountryProvider>
    </div>
  );
}

export default App;
