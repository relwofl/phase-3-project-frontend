import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navigation from './components/Navigation';
import Home from './components/Home';
import Cows from './components/Cows';
import Cow from './containers/Cow';
import FarmFields from './components/FarmFields';
import CowForm from './containers/CowForm';
// import CowLink from './components/CowLink';



function App() {
  return (
    <Router>
      <Navigation />
        <div className="Body">
          <Switch>
                <Route exact path="/">
                 <Home />
                </Route>
                <Route path="/cows/:id">
                  <Cow />
                </Route>
                <Route path="/cows">
                  <Cows />
                </Route>
                <Route path="/farm-fields">
                  <FarmFields />
                </Route>
                <Route path="/add-cow">
                  <CowForm />
                </Route>
                     
                      {/* <Route path="/cows/:id">
                        <Cow />
                      </Route> */}

          </Switch>
        </div>
    </Router>
  );
}

export default App;
