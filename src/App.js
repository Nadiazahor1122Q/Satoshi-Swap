
import './App.css';
import Navbar from "./Component/Navbar/Navbar";
import {Rewards} from "./Component/Rewards/Rewards";
import {Income} from "./Component/Income/Income";
import {Benefits} from "./Component/Benefits/Benefits"


function App() {
  return (
    <div className="App">
    
    <Navbar></Navbar>
    <Rewards></Rewards>
    <Income></Income>
    <Benefits></Benefits>
    </div>
  );
}

export default App;
      