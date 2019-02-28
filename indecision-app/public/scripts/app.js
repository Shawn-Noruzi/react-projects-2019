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
    count++;renderCounterApp();
};
var minusOne = function minusOne() {
    count--;renderCounterApp();
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
};

//fetch element
var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
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
    //render to screen
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
