import { Route, Switch } from 'react-router-dom';
import Initial from './pages/first-page';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={ Initial } />
      </Switch>
    </div>
  );
}

export default App;
