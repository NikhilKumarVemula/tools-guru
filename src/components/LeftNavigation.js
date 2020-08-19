import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import 'react-pro-sidebar/dist/css/styles.css';
import './LeftNavigation.css';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

export class LeftNavigation extends Component {

    constructor(props){
        super(props);
        this.state = {categories:[]}
    }

    componentDidMount(){
        this.refreshlist();
    }

    refreshlist(){
       fetch('http://localhost:8080/categories')
       .then(response=> response.json())
       .then(data => {
        this.setState({categories:data});
       })
    }

    render(){
    const {categories} = this.state;
        return(
              <Table className="sideBar">
                <thead>
                    <tr>
                        <th><b>CARTEGORY</b></th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category=>
                        <tr key ={category.id}>
                            <td>{category.category_name}</td>
                        </tr>
                    )}
                </tbody>
              </Table>
        )
    }
}