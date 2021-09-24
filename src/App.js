import './App.css';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Medium from './pages/Medium';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/medium' component={Medium}/>
    </Switch>
  );
}

export default App;
