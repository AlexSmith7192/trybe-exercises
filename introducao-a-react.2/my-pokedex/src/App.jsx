import React from 'react';
import './App.css';
import Data from './data';
import PokedexList from './PokedexList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <PokedexList pokemons={ Data } />
      </div>
    );
  }
}

export default App;
