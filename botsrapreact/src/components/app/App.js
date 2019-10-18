import React from 'react';
import './App.css';
import Header from '../header';
import Footer from '../footer';
import {ContactPage} from "../pages";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import {BrowserRouter as Router, Switch, Route,withRouter} from 'react-router-dom';
function App() {

  return (
      <Router>

        <div className="App">
          <Header/>
          <Switch>
            <Route path="/"
                   render={() => <h2>Welcome to StarDB</h2>}
                   exact />
            <Route path="/contact" component={withRouter(ContactPage)} />
            <Route render={() => <h2>Page not found</h2>} />
          </Switch>
          <Footer/>
        </div>
      </Router>

  );
}

export default App;
