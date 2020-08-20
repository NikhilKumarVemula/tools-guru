import React from 'react';
import './App.css';
import {Home} from './components/Home';
import {Order} from './components/Order';
import {ContactUs} from './components/ContactUs';
import {Account} from './components/Account';
import Layout from './components/layout/Layout';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <div className="container">

            <Layout/>

                <Switch>
                    <Route path='/' component={Home} exact/>
                    <Route path='/order' component={Order}/>
                    <Route path='/account' component={Account}/>
                    <Route path='/contactUs' component={ContactUs}/>
                </Switch>

        </div>
    </BrowserRouter>
  );
}

export default App;
