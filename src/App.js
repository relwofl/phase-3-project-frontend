import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navigation from './components/Navigation';
import Home from './components/Home';
import Cows from './components/Cows';



function App() {
  return (
    <Router>
      <Navigation />
        <div className="Body">
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>
                  <Route path="/cows">
                    <Cows />
                  </Route>
         
          </Switch>
        </div>
    </Router>
  );
}

export default App;
