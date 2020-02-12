import React, {Component} from 'react';

class Counter extends Component{
  constructor(){
    super();
    this.state = {
      count:0, text: 'Count by 1',
    }
  }

  //incrementing by 1 or 2
  increment = () => {

    if (this.state.text == "Count by 1") {
      if (this.state.count >= 19) {
        this.setState({
          count: 20,
        });
      }
      else {
        this.setState({
          count: this.state.count + 1,
        });
      }
    }
    else {
      if (this.state.count >= 19) {
        this.setState({
          count: 20,
        });
      }
      else {
        this.setState({
          count: this.state.count + 2,
        });
      }
    }
  }

  //decrementing by 1 or 2
  decrement = () => {

    if (this.state.text == "Count by 1") {
      if (this.state.count >= 1) {
        this.setState({
          count: this.state.count - 1,
        });
      }
      else {
        this.setState({
          count: 0,
        });
      }
    }
    else {
      if (this.state.count <= 1) {
        this.setState({
          count: 0,
        });
      }
      else {
        this.setState({
          count: this.state.count - 2,
        });
      }
    }
  }

  //clear
  clearButton = () => {
    this.setState({
      count: 0,
    })
  }

  //count by 2
  onClickButton = () => {
   if (this.state.text == "Count by 1") {
     this.setState({
       text: 'Count by 2',
     });
   }
   else{
     this.setState({
       text: 'Count by 1',
     });
   }
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
          <button type="button"onClick={this.onClickButton}>{this.state.text}</button>

        </div>

      </div>
    )
  }
}

export default Counter;
