import { Route, Switch } from 'react-router-dom';
import Initial from './pages/first-page';
import PokePage from './pages/poke-pages';
import '../src/APP.css';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={ Initial } />
        <Route path="/pokemons" component={ PokePage } />
      </Switch>
    </>
  );
}

export default App;
