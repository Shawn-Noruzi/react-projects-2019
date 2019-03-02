class IndecisionApp extends React.Component {
  render() {
    const title = "indecision";
    const subtitle = "Put your life in the hands of an apple";
    const options = ["thing one", "thing two", "thing three", "thing four"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOptions />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <p>Component: Action</p>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <p>Component : Options </p>
            {this.props.options.map(option => <Option key={option} optionText={option} />)}
        <Option />
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
            {this.props.optionText}
      </div>
    );
  }
}

class AddOptions extends React.Component {
  render() {
    return (
      <div>
        <p>Component : AddOptions</p>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
