'use strict';

//JSX = Javascript XML 
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Header'
    ),
    React.createElement(
        'p',
        null,
        'This is JSX from app.js'
    )
);
var count = 0;
var addOne = function addOne() {
    return console.log('addOne');
};
var minusOne = function minusOne() {
    return console.log('minusOne');
};
var reset = function reset() {
    return console.log('reset');
};
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: reset },
        '0'
    )
);
//fetch element
var appRoot = document.getElementById('app');
//render to screen
ReactDOM.render(templateTwo, appRoot);
