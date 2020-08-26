import React, {Component} from 'react';
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
           <div className="displayCategory">
                {categories.map(category=>
                    <div key ={category.id}>
                        <h3 className="categoryHeading">{category.category_name}</h3>
                        <p>Image</p>
                        <p>Item Name</p>
                    </div>
                )}
           </div>
           )
       }
}