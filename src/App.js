import './App.css';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Medium from './pages/Medium';
import Easy from './pages/Easy';
import Hard from './pages/Hard';
import AnyDifficulty from './pages/AnyDifficulty';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/medium' component={Medium}/>
      <Route path='/Easy' component={Easy}/>
      <Route path='/Hard' component={Hard}/>
      <Route path='/AnyDifficulty' component={AnyDifficulty}/>
    </Switch>
  );
}

export default App;
