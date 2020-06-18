import React, { Component } from 'react';
import './App.css';
import Image from "./Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://cdn10.bigcommerce.com/s-3tqgz/template/images/article/how_to_break_up_cat_fights.jpg"} />
      </div>
    )
  }
}
    

export default App;
