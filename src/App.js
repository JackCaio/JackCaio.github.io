import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
// import Legacy from './pages/Legacy';
import Projects from './pages/Projects';
import store from './redux';

function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ LandingPage } />
          <Route path="/projects" component={ Projects } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
