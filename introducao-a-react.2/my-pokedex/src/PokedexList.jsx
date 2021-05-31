import React from 'react';
import PokedexCard from './PokedexCard';
import PropTypes from 'prop-types';


class PokedexList extends React.Component {
  render() { 
    const { pokemons } = this.props
    
    return ( 
      <div className="pokedex-list">
        { pokemons.map((pokemon) => <PokedexCard pokemon={ pokemon } key={ pokemon.id } />) }
      </div>
     );
  }
}

PokedexList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object),
}

PokedexList.defultProps = {
  pokemons: [{}],
}

export default PokedexList;