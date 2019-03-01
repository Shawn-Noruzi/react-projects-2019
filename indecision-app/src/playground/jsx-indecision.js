//JSX = Javascript XML 


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

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

//fetch element
const appRoot = document.getElementById('app');

const renderApp = () => {
    const template = (
        <div>
            <h1>Header</h1>
            <p>This is JSX from app.js</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length ? false : true} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={resetButton}>Reset Array</button>

            {
                app.options.map((option) => <p key={option}>Option: {option}</p>)
            }

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderApp();