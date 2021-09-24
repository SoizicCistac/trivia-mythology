import './App.css';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Medium from './pages/Medium';
import Easy from './components/Easy';
import Hard from './components/Hard';
import AnyDifficulty from './components/AnyDifficulty';

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
