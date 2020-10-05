import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Work from "./work.jsx";
import About from "./about.jsx";
import Navbar from "./navbar.jsx"

class App extends Component {
    render() {
      return (
         <BrowserRouter>
          <div>
            <Navbar />
              <Switch>
               <Route path="/" exact component={Work}/>
               <Route path="/about" exact component={About}/>
             </Switch>
          </div> 
        </BrowserRouter>
      );
    }
  }
   
  export default App;

