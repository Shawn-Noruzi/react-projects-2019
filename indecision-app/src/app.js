//JSX = Javascript XML 

//fetch element
const appRoot = document.getElementById('app');

let app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderApp();
};

const resetButton = () => {
    app.options = [];
    renderApp();
};

const renderApp = () => {
    const template = (
        <div>
            <h1>Header</h1>
            <p>This is JSX from app.js</p>
            <p>{app.options.length}</p>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
            <button onClick={resetButton}>Reset Array</button>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderApp();