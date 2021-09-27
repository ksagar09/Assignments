import React from 'react';
import './counter.css'

import Counter from './Counter';
class Main extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        counterA: 0,
        counterB: 0,
        counterC: 0
      }
    }
  
    handleAllIncrement = () => {
      this.setState(prevState => ({
        counterA: prevState.counterA + 1,
        counterB: prevState.counterB + 1,
        counterC: prevState.counterC + 1
      }))
    }
  
    handleAllDecrement = () => {
      this.setState(prevState => ({
        counterA: prevState.counterA - 1,
        counterB: prevState.counterB - 1,
        counterC: prevState.counterC - 1
      }))
    }
  
    render() {
      return (
       <div>
          <div>
            <Counter counter={this.state.counterA} />
            <Counter counter={this.state.counterB} />
            <Counter counter={this.state.counterC} />
          </div>
          <br />
          <div style={{textAlign: 'center'}}>
            <button onClick={this.handleAllIncrement}> +IncreaseMent All </button>
            <button onClick={this.handleAllDecrement}>-Decreament All </button>
          </div>
          </div>
      );
    }
  }
  export default Main;