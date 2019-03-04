class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    //default state object
    this.state = {
      count: 0
    };
  }
  handleAddOne() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleMinusOne() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count} </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));

//let count = 0;
//const addone = () => {
//    count++; rendercounterapp();
//}
//const minusone = () => {
//    count--; rendercounterapp();
//}
//const reset = () => {
//    count = 0;
//    rendercounterapp()
//}

//fetch element
//const approot = document.getelementbyid('app');

//const rendercounterapp = () => {
//    const templatetwo = (
//        <div>
//            <h1>count: {count}</h1>
//            <button onclick={addone}>+1</button>
//            <button onclick={minusone}>-1</button>
//            <button onclick={reset}>0</button>

//        </div>
//    );
//    render to screen
//    reactdom.render(templatetwo, approot);
//};

//rendercounterapp();
