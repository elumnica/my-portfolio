import Homepage from "./containers/Homepage";
import "./css/app.css";
import "./projects/project.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutContainer from "./containers/AboutContainer";
import ContactContainer from "./containers/ContactContainer";
import AxialJetEngine from "./containers/AxialJetEngine";
import IronManHelmet from "./containers/IronManHelmet";
import HydraulicManifold from "./containers/HydraulicManifold";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route exact path="/about">
                    <AboutContainer />
                </Route>
                <Route exact path="/contact">
                    <ContactContainer />
                </Route>
                <Route exact path="/engine">
                    <AxialJetEngine />
                </Route>
                <Route exact path="/manifold">
                    <HydraulicManifold />
                </Route>
                <Route exact path="/iron">
                    <IronManHelmet />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
