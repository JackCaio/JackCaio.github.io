import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import Legacy from './pages/Legacy';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ LandingPage } />
        <Route path="/projects" component={ Projects } />
        <Route path="/contact" component={ Projects } />
        <Route path="/legacy" component={ Legacy } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
