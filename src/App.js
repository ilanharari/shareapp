import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './Firebase';

class App extends Component {
   constructor(props) {
     super(props);
     this.ref = firebase.firestore().collection('swaps');
     this.unsubscribe = null;
     this.state = {
       swaps: []
     };
   }
 
   onCollectionUpdate = (querySnapshot) => {
      const swaps = [];
      querySnapshot.forEach((doc) => {
        const { title, description, author } = doc.data();
        swaps.push({
          key: doc.id,
          doc, // DocumentSnapshot
          title,
          description,
          author,
        });
      });
      this.setState({
        swaps
     });
    }

    componentDidMount() {
      this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    render() {
      return (
        <div class="container">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">
                SWAP LIST
              </h3>
            </div>
            <div class="panel-body">
              <h4><Link to="/create">Add swap</Link></h4>
              <table class="table table-stripe">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Author</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.swaps.map(swap =>
                    <tr>
                      <td><Link to={`/show/${swap.key}`}>{swap.title}</Link></td>
                      <td>{swap.description}</td>
                      <td>{swap.author}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
  }

  
export default App;