
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

// stylesheet
import "./assets/styles.css"

// page for route
import MateriOne from "./page/materi1";
import MateriTwo from "./page/materi2";

// eslint-disable-next-line react-hooks/rules-of-hooks
export default class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      useActivenav: "materiOne",
    }
  }

  render() {
    return (
      <Router>
        <div className="container">
          <div className="navbar">
            <ul className="ulNavbar">
              <li><Link to={"/"} className={this.state.useActivenav == "materiOne" ? "active li-Nav" : "li-Nav"} onClick={() => this.setState({ useActivenav: "materiOne" })}>Tugas Materi Pertama</Link></li>
              <li><Link to={"/materitwo"} className={this.state.useActivenav == "materiTwo" ? "active li-Nav" : "li-Nav"} onClick={() => this.setState({ useActivenav: "materiTwo" })}>Tugas Materi Kedua</Link></li>
            </ul>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={MateriOne} />
              <Route exact path="/materitwo" component={MateriTwo} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}
