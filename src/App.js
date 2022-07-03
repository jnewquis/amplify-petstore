import './App.css';

/////////////////////////////////////////
import {
  Pets
} from './ui-components';
import { NavBarNew } from "./ui-components";
import { Footer } from "./ui-components";





/////////////////////////////////////////

function App() {
  return (
    <div className="App">
      <NavBarNew />
      <header className="App-header">
        <Pets />
      </header>
      <Footer />
    </div>
  );
}

export default App;
