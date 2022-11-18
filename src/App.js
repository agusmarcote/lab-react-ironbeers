import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import BeersList from './Pages/BeersList';
import BeerDetail from './Pages/BeerDetails';
import RandomBeer from './Pages/RandomBeer';
import NewBeer from './Pages/NewBeer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/beers" element={<BeersList/>} />
        <Route path="/beers/:beerId" element={<BeerDetail/>} />
        <Route path="/randomBeer" element={<RandomBeer/>} />
        <Route path="/create" element={<NewBeer/>} />
      </Routes>
    </div>
  );
}

export default App;
