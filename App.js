import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Snack from './Snack';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/snack/1" activeClassName="active">Snack 1</NavLink>
            </li>
            <li>
              <NavLink to="/snack/2" activeClassName="active">Snack 2</NavLink>
            </li>
            <li>
              <NavLink to="/snack/3" activeClassName="active">Snack 3</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={VendingMachine} />
          <Route path="/snack/:id" component={Snack} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
import './styles.css';

