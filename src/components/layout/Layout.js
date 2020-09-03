import React from 'react';
import Frame from '../../hoc/Frame';
import {Navigation} from '../navigation/Navigation';
import {LeftNavigation} from '../navigation/LeftNavigation';
import './Layout.css';

import {FormControl, Form, Button} from 'react-bootstrap';
let navigationSelected = (a) => {
    console.log(a);
}
const layout = (props) => {
    return(
        <Frame>
             <Navigation/>
            <div className="container">
                <LeftNavigation navigationSelected={navigationSelected}/>
            </div>
            <main>
            <Form inline className="searchForm">
                <FormControl type="text" placeholder="Search" className="col-md-8"/>
                <Button variant="outline-info">Search</Button>
            </Form>
                {props.children}
            </main>
        </Frame>
    )
};

export default layout;
