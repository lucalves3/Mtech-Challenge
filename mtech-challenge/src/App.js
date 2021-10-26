import { Route, Switch } from 'react-router-dom';
import Initial from './pages/first-page';
import PokePage from './pages/poke-pages';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={ Initial } />
        <Route path="/pokemons" component={ PokePage } />
      </Switch>
    </div>
  );
}

export default App;
