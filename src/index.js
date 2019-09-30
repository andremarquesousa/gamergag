import React from 'react';
import ReactDOM from 'react-dom';
import Header from './views/header';
import Main from './views/home';

import './assets/stylesheets/bundle.css';

import * as serviceWorker from './serviceWorker';

const Layout = (
    <div className="root">
        <Header />
        <Main />
    </div>
);

ReactDOM.render(Layout, document.getElementById('general'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();