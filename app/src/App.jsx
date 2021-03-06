import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './components/home/Home';
import Home from "./components/home/Home";
import ToursPage from "./components/tours/ToursPage";
import TourPage from "./components/tours/TourPage";
import ContactsPage from "./components/contacts/Contacts";
import LoginPage from "./components/auth/Login";
import AccountPage from "./components/auth/Account";
import Calendar from "./components/tours/Calendar";
import RegisterPage from "./components/auth/Register";
import Logout from "./components/auth/Logout";

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path='/tours/:id' component={TourPage}/>
            <Route path="/tours"><ToursPage/></Route>
            <Route path="/contacts"><ContactsPage/></Route>
            <Route path="/register"><RegisterPage/></Route>
            <Route path="/logout"><Logout/></Route>
            <Route path="/login"><LoginPage/></Route>
            <Route path="/account/calendar"><Calendar/></Route>
            <Route path="/account"><AccountPage/></Route>
          </Switch>
      </Router>
    );
  }
}

export default App;
