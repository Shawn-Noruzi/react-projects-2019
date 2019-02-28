//JSX = Javascript XML 
let template = (
    <div>
        <h1>Header</h1>
        <p>This is JSX from app.js</p>
    </div>
);
let count = 0;
const addOne = () => console.log('addOne');
const minusOne = () => console.log('minusOne');
const reset = () => console.log('reset');
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>0</button>
        
    </div>
)
//fetch element
let appRoot = document.getElementById('app');
//render to screen
ReactDOM.render(templateTwo, appRoot);