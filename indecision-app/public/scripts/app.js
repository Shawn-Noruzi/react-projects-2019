'use strict';

//JSX = Javascript XML 

//conditional rendering 
/* 
function getLocation(location){
if (location){
return <p>user.location</p>

//given there's an object named user with a location keyvalue pair
{getlocation(user.location)} 
}
}
*/
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
//fetch element
var appRoot = document.getElementById('app');
//render to screen
ReactDOM.render(template, appRoot);
