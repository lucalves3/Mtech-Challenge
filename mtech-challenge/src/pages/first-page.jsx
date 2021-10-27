import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import CarouselComponent from '../components/CarouselComponent';

export class Initial extends Component {
  render() {
    return (
      <main>
        <Link to="/pokemons">
          <button type="button">Avançar</button>
        </Link>
        <CarouselComponent />
      </main>
    )
  }
}

export default Initial;
