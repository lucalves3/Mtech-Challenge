import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { searchApiPokemon } from '../services/APIs';
import '../styles/ProcurarPokemons.css'

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

  componentDidMount() {
    alert('Digite o nome do pokemon e aperte Enter')
  }

  getPokemonName(event) {
    const name = event.target.value;
    
    this.setState({
      namePokemon: name.toLowerCase(),
    })
  }

  async submitSearch(event) {
    const { namePokemon } = this.state;
    if (event.key === 'Enter') {
      const APIreturn = await searchApiPokemon(namePokemon);
      this.setState({
        arrayObject: APIreturn
      });
    }
  }

  render() {
    const  { arrayObject, namePokemon } = this.state;
    const InputExampleIcon = () => <Input onChange={ this.getPokemonName } onKeyDown={ this.submitSearch } icon='search' placeholder='Search...' />
    return (
      <>
        <header className="header-section">
        <Link to="/">
          <Button basic inverted color='yellow'>
            Retornar
          </Button>
        </Link>
          { InputExampleIcon() }
        </header>
          { arrayObject.length !== 0 ?
          <main className="main-search-pokes">
          <section className="card">
            <div>
              <h2> { namePokemon.toUpperCase() } </h2>
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
                      (<div key={element.name}>
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
        </main>
        : '' }
      </>
    )
  }
}

export default ProcurarPokemons;
