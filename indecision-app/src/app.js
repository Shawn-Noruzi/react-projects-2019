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
let template = (
    <div>
        <h1>Header</h1>
        <p>This is JSX from app.js</p>
    </div>
);
//fetch element
let appRoot = document.getElementById('app');
//render to screen
ReactDOM.render(template, appRoot);