class Visible extends React.Component {

    constructor(props) {
        super(props);
        //preserve binding
        this.handleToggle = this.handleToggle.bind(this);
        //default state
        this.state = {
            flag: false
        };
    }


    handleToggle() {
        this.setState(prevState => { return { flag: !prevState.flag };})}
    

    render() {
        return (
            <div>
                <p>Visibility</p>
                <button onClick={this.handleToggle}>{this.state.flag ? 'show' : 'not show'}</button>
                {this.state.flag && <div>some details</div>}
            </div>
        );
    }
}



ReactDOM.render(<Visible />, document.getElementById('app'));

