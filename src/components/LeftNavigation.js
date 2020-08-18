import React, {Component} from 'react';
import {ListGroup} from 'react-bootstrap';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './LeftNavigation.css';

export class LeftNavigation extends Component {
    render(){
        return(
                <ProSidebar className="sideBar">
                  <Menu iconShape="square">
                    <MenuItem>Dashboard</MenuItem>
                    <SubMenu title="Components">
                      <MenuItem>Component 1</MenuItem>
                      <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                  </Menu>
                </ProSidebar>
        )
    }
}