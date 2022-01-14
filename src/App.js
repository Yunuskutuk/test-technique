import './App.css';
import Composant from "./composant1/composant1";
import Composant2 from "./composant2/composant2";
// import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Composant />
        {/*<Navbar />*/}
      <Composant2 />
    </div>
  );
}

export default App;
