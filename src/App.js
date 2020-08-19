import React from 'react';
import './App.css';

import {Home} from './components/Home';
import {Order} from './components/Order';
import {ContactUs} from './components/ContactUs';
import {Account} from './components/Account';

import {Navigation} from './components/Navigation';
import {LeftNavigation} from './components/LeftNavigation';

import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <div className="container">
            <Navigation/>
            <LeftNavigation/>
                <switch>
                    <Route path='/' component={Home} exact/>
                    <Route path='/order' component={Order}/>
                    <Route path='/account' component={Account}/>
                    <Route path='/contactUs' component={ContactUs}/>
                </switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
