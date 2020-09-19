import React, {Component} from 'react';
import './App.css';
import About from '../components/About.js'
import Gallery from '../components/Gallery.js';
import Nav from '../components/Nav';



class App extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }




  render() {
    return (
      <div className="App">
        <div>
          <Nav />
        </div>
        <div className="body">

        <div style = {{color: "black", fontSize: "medium", marginTop: "2rem"}}>
          <About/>
        </div>

        <div className="Space" style = {{padding: "1rem 5rem"}}>
          <Gallery />
          </div>
        </div>
      </div>
    );


  } 
}

export default App;
