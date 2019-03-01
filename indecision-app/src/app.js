class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        );
    };
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
            );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <p>options</p>
            </div>
            );
    }
}

class AddOptions extends React.Component {
    render() {
        return (
            <div>
                <p>add</p>
            </div>
        );
    }
}


const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOptions />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));
