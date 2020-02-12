import React, {Component} from 'react';

class Counter extends Component{
  constructor(){
    super();
    this.state = {
      count:0,
    }
  }


  //this is where we are going to put out methods
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  //Decrement
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    })
  }

  //clear
  clearButton = () => {
    this.setState({
      count: 0,
    })
  }


  render(){
    return(
      <div className="container">

        <div className="navbar">Counter</div>

        <div className="counter">

          <h1>{this.state.count}</h1>
          <button type="button" onClick={this.increment}> Increment</button>
          <button type="button"onClick={this.decrement}> Decrement</button>
          <button type="button"onClick={this.clearButton}> Clear</button>

        </div>

      </div>
    )
  }
}

export default Counter;
