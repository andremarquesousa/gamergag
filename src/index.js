import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './general/header';
import Home from './pages/home';
import CreateMeme from './pages/create-meme';
import './general/base.css';
import * as serviceWorker from './serviceWorker';

const Layout = (
    <Router>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create-meme" component={CreateMeme} />
        </Switch>
    </Router>
);

ReactDOM.render(Layout, document.getElementById('general'));
serviceWorker.unregister();