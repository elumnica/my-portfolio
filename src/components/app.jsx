import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Work from "./work.jsx";
import About from "./about.jsx";
import Navbar from "./navbar.jsx";
import Contact from "./contact.jsx";
import Engine from "../screens/jet-engine.js";
import Iron from "../screens/iron-man.js";
import Manifold from "../screens/manifold.js";
import "../styles/app.css";

class App extends Component {
    render() {
      return (
         <BrowserRouter>
          <div>
            <Navbar />
              <Switch>
               <Route path="/" exact component={Work}/>
               <Route path="/about" exact component={About}/>
               <Route path="/contact" exact component={Contact}/>
               <Route path="/engine" exact component={Engine}/>
               <Route path="/iron" exact component={Iron}/>
               <Route path="/manifold" exact component={Manifold}/>
             </Switch>
          </div> 
        </BrowserRouter>
      );
    }
  }
   
  export default App;

