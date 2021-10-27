import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import ImagesFirstPage from '../components/imagesFirstPage';
import alakazan  from '../images/alakazan.png';
import charizard from '../images/charizard.png';
import lucario from '../images/lucario.png';
import volcanion from '../images/volcanion.png';
import '../styles/first-page.css';


export class Initial extends Component {
  render() {
    return (
      <>
      <header className="header-FirstPage">
        <Link to="/pokemons">
          <Button basic inverted color='yellow'>
            Avançar
          </Button>
        </Link>
      </header>
      <main>
        <ImagesFirstPage />
        <section className="section-Images-firstPage">
          <img className="images-FirstPage" src={ alakazan } alt="Alakazan"/>
          <img className="images-FirstPage" src={ charizard } alt="charizard"/>
          <img className="images-FirstPage" src={ lucario } alt="lucario"/>
          <img className="images-FirstPage" src={ volcanion } alt="volcanion"/>
        </section>
      </main>
      <footer>
      </footer>
      </>
    )
  }
}

export default Initial;
