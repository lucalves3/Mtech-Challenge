import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { getAllPokemons, getApiPokemon } from '../services/APIs';

export class CarouselComponent extends Component {
  constructor() {
    super();

    this.getFunction = this.getFunction.bind(this);
		this.getAllPokes = this.getAllPokes.bind(this);

    this.state={
			pokeApi: [],
			allPokes: [],
			nameAllPokes: [],
		};
  }

  componentDidMount() {
		this.getFunction();
		this.getAllPokes();
	}


  async getAllPokes() {
		const arrayAllPokes = await getAllPokemons();
		this.setState({
			allPokes: [arrayAllPokes.results],
			nameAllPokes: [arrayAllPokes.results.map((poke) => (poke.name))],
		});
	}

  async getFunction() {
		const arrayNames = [];
		const arrayApi = [];
		const api = await getAllPokemons();
		for (let index = 0; index < 20; index+= 1) {
			arrayNames.push(api.results.map((poke) => (poke.name))[index]);
			const vamo = await getApiPokemon(`${arrayNames[index]}`);
			arrayApi.push(vamo);
			this.setState({
				pokeApi: [arrayApi],
			});
		}
	}



  render() {
    const { pokeApi } = this.state;
    return (
      <Carousel>
        {<section className="section-cards-api-pokemon">
					{ pokeApi.map((element) => (element.map((pokemon) => (
						<section key={ pokemon.name } >
							{<img className="pokemon-image" src={ pokemon.sprites.front_default } alt={ pokemon.name } />}
							<p className="name-pokemon"> { pokemon.name } </p>
							<p> ID:{ pokemon.id }</p>
							<div className="div-elet-fire">
								{ pokemon.types.map((name) => (<p key={ name.url } className={`tag-p-${name.type.name}`}>{ name.type.name }</p>)) }
							</div>
						</section>
					))))}
				</section>}
      </Carousel>
    )
  }
}

export default CarouselComponent;
