import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import NotFoundPage from "./components/NotFoundPage";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAddressCard, faHome} from "@fortawesome/free-solid-svg-icons";

/**
 * @return {boolean}
 */
function App() {
    return (
        <Router>
            <NavBar/>
            <div className="container-fluid">
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/" component={Home} exact={true}/>
                    <Route path="/about" component={About}/>
                    <Route path="**" exact={true} component={NotFoundPage}/>
                </Switch>
            </div>
        </Router>
    );
}

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3 mb-5 rounded">
            <Link className="navbar-brand" to="/"><img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo image" height="30" width="30" /> Weather Checker</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/"><FontAwesomeIcon icon={faHome} /> Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about"><FontAwesomeIcon icon={faAddressCard} /> About <span
                            className="sr-only">(current)</span></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default App;
