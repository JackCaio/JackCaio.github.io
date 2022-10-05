import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ LandingPage } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
