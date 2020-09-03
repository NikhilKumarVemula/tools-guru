import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import {Button} from 'react-bootstrap';
import logo from '../logo.svg';
import ScrollToTop from './pageScroller/ScrollToTop';
import './Home.css';

export class Home extends Component {
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
               <div>     
                   
           <div className="displayCategory">
                {categories.map(category=>
                    <div key ={category.id}>
                        <h3 className="categoryHeading"><u>{category.category_name}</u></h3>
                        <CardDeck>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={logo} />
                                <Card.Body>
                                    <Card.Title>Item Name 1</Card.Title>
                                    <Card.Text> product information 1 </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card> 
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={logo} />
                                <Card.Body>
                                    <Card.Title>Item Name 2</Card.Title>
                                    <Card.Text> product information 2 </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card> 
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={logo} />
                                <Card.Body>
                                    <Card.Title>Item Name 3</Card.Title>
                                    <Card.Text> product information 3</Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card> 
                        </CardDeck>
                    </div>
                )}
           </div>
           <ScrollToTop />
           </div>
           )
       }
}