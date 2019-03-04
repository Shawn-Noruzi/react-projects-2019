

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: ["thing one", "thing two", "three", "thing four"]
        };
    }
    render() {
    const title = "indecision";
    const subtitle = "Put your life in the hands of an apple";
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action hasOptions={this.state.options.length>0} />
        <Options options={this.state.options} />
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
  handlePick() {
    alert("handle");
  }

  render() {
    return (
      <div>
        <p>Component: Action</p>
            <button
                onClick={this.handlePick}
                disabled={!this.props.hasOptions}
            >
                What should I do?
            </button>
      </div>
    );
  }
}

class Options extends React.Component {
    constructor(props) {
        super(props); //to keep access to this.props as before
        this.HandleRemoveAll = this.HandleRemoveAll.bind(this);

    }
    HandleRemoveAll() {
        console.log(this.props.options);
    }

  render() {
    return (
      <div>
        <p>Component : Options </p>
        {this.props.options.map(option => (
          <Option key={option} optionText={option} />
        ))}
        <Option />
        <button onClick={this.HandleRemoveAll}>Remove All Options</button>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}

class AddOptions extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if (option) {
            alert(option);
        }
    }

  render() {
    return (
      <div>
        <p>Component : AddOptions</p>
            <form onSubmit={this.handleAddOption}>
                <input id='value' type='text' name='option'></input>
                <button >Submit Button</button>
            </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
