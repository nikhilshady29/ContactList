import React from 'react';
import Contactss from './components/ContactFolder/Contactss';
import Header from './components/LayoutFolder/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Provider from './context';
import AddContact from './components/ContactFolder/AddContact';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import EditContact from './components/ContactFolder/EditContact';

class App extends React.Component
{
  render()
  {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header heading="Contact Manager"/>
            <div className="container">

              <Switch>
                <Route exact path="/" component = { props => <Contactss {...props}/> } />
                <Route exact path="/about" component={props => <About {...props}/>} />
                <Route exact path="/contact/add" component = { props => <AddContact {...props}/> } />
                <Route exact path="/contact/edit/:id" component={props => <EditContact {...props}/>} />
                <Route>
                  <NotFound />
                </Route>
              </Switch>

            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
