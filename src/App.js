// import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import Cows from './components/Cows';
import Navigation from './components/Navigation';


function App() {
  return (
    <Router>
    <div className="App">
      <h1>Cows</h1>
      <Navigation />
        <div className="Body">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/cows">
              <Cows />
            </Route>
            {/* <Route path="/fields">
              <Fields />
            </Route>
            <Route path="/CreateCow">
              <Add Cow />
            </Route> */}
            {/* <Route path="/">
              < />
            </Route> */}
          </Switch>

        </div>
      
    </div>
    </Router>
  );
}

export default App;
