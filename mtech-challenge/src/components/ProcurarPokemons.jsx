import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { searchApiPokemon } from '../services/APIs';

export class ProcurarPokemons extends Component {
  constructor() {
    super();

    this.state = {
      namePokemon: '',
      arrayObject: [],
    }

    this.getPokemonName = this.getPokemonName.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  getPokemonName(event) {
    const name = event.target.value;
    this.setState({
      namePokemon: name,
    })
  }

  async submitSearch(event) {
    const { namePokemon } = this.state;
    if (event.key === 'Enter') {
      const APIreturn = await searchApiPokemon(namePokemon);
      console.log(APIreturn);
      this.setState({
        arrayObject: APIreturn
      })
    }
  }

  render() {
    const  { arrayObject } = this.state;
    console.log(arrayObject.stats);
    const InputExampleIcon = () => <Input onChange={ this.getPokemonName } onKeyDown={ this.submitSearch } icon='search' placeholder='Search...' />
    return (
      <>
        <header className="header-section">
        <Link to="/">
          <button type="button">Retornar</button>
        </Link>
          { InputExampleIcon() }
        </header>
        <hero className="main-poke-search">
          <section>
          </section>
          { arrayObject.length !== 0 ? 
          <section className="card">
          <div>
            <h2> { arrayObject.name } </h2>
            <div>
              {<img className="pokemon-image" src={ arrayObject.sprites.front_default } alt={ arrayObject.name } />}
              {<img className="pokemon-image" src={ arrayObject.sprites.back_default } alt={ arrayObject.name } />}
            </div>
            <div>
              <h2><span>{arrayObject.weight}Kg</span></h2>
              <div className="container-types">
                { arrayObject.types.map((name) => (
                  <p key={ name.url } className={`tag-p-${name.type.name}`}>{ name.type.name }</p>
                ))}
              </div>
            </div>
            <div>
              <h1>Estatísticas</h1>
                <section>
                  { arrayObject.stats.map((element) => (
                    (<div key={element}>
                      <div className="div-status-all" >
                        <div>
                          <p>{element.stat.name}</p>
                        </div>
                        <div className="status-bar">
                          <p className="status-bar-p" style={{width: `${element.base_stat}%`}}></p>
                        </div>
                        <div>
                          <p className="tag-p-basestat">{element.base_stat}</p>
                        </div>
                      </div>
                    </div>)
                  ))}
                </section>
            </div>
          </div>
          </section>
        : <h1>Digite o nome do Pokemon e aperte Enter</h1> }
        </hero>
      </>
    )
  }
}

export default ProcurarPokemons;
