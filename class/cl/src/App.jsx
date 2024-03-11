import { Component } from "react";


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      counter: props.count,
    }
  }

  handleClick = (operator) => {
    if(operator == "+"){
      this.setState({counter: this.state.counter + 1})
    }else {
      this.setState({counter: this.state.counter - 1})
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter
        }</h1>
        <button onClick={() => this.handleClick("+")} disabled={this.state.counter == 10 && true}>+</button>
        <button onClick={() => this.handleClick("-")} disabled={this.state.counter == 1 && true}>-</button>
      </div>
    )
  }
}



export default App;