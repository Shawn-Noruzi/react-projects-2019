console.log('yo');

//JSX = Javascript XML 

var template = <p>This is JSX from app.js</p>
//fetch element
var appRoot = document.getElementById('app');
//render to screen
ReactDOM.render(template, appRoot);