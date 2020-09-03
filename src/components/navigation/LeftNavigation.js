import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import 'react-pro-sidebar/dist/css/styles.css';
import './LeftNavigation.css';
import {BrowserRouter, Route, Link } from 'react-router-dom';
// import {Home} from '../../components/Home';


// const categorySection = useRef(null); 

// const gotoCategory = ({category}) => window.scrollTo({ top: categorySection.current.offsetTop, behavior: "smooth" });

// const gotoCategory = (event) => {
//         console.log(event.target.value);
//     }

export class LeftNavigation extends Component {

    constructor(props){
        super(props);
        this.state = {
            categories:[]
         }
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

    navigationSelected = (id) => {
        this.props.navigationSelected(id);
    } 

    render(){
    const {categories} = this.state;
        return(
        <div>
              <Table className="sideBar">
                <thead>
                    <tr>
                        <th><b>CARTEGORY</b></th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category=>
                        <tr key ={category.id}>
                            <td>
                                <BrowserRouter>
                                    <Link path='/' exact onClick = {this.navigationSelected(category.category_name)}>
                                        {category.category_name}
                                    </Link>
                                </BrowserRouter> 
                                 
                            </td>
                        </tr>
                    )}
                </tbody>
              </Table>
        </div>
        )
    }
}