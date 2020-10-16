import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Work from "./work.jsx";
import About from "./about.jsx";
import Navbar from "./navbar.jsx";
import Contact from "./contact.jsx"

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
             </Switch>
          </div> 
        </BrowserRouter>
      );
    }
  }
   
  export default App;

