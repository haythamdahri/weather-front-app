import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import Home from "./components/Home";
import About from "./components/About";

/**
 * @return {boolean}
 */
function App() {
    return (
        <Router>
            <NavBar />
            <div className="container-fluid">
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Route path="/" component={Home} exact/>
                <Route path="/about" component={About}/>
            </div>
        </Router>
    );
}

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Weather Checker</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About <span
                            className="sr-only">(current)</span></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default App;
