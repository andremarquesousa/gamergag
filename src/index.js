import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import './general/base.css';
import Header from './general/header';
import Footer from './general/footer';
import Home from './pages/home';
import Post from './pages/post';
import User from './pages/user';
import CreateMeme from './pages/create-meme';
import * as serviceWorker from './serviceWorker';

const Layout = (
    <Router>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/post/:postId" component={Post} />
            <Route exact path="/user/:userId" component={User} />
            <Route exact path="/create-meme" component={CreateMeme} />
        </Switch>
        <Footer />
    </Router>
);

ReactDOM.render(Layout, document.getElementById('general'));
serviceWorker.unregister();