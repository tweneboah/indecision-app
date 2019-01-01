//Import React and react DOM libraries
import React from "react";
import ReactDOM from "react-dom"





//Passing object to render
const user = {
    name: "",
    age: 29,
    location: "Camp"
}

const app = {
    title: "My Mother",
    subtitle: "God help my mother for longer life"
}

//Template 1
let template = (
    <div>
      <h1>{app.title}</h1>
      <p>{app.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);
//Conditional Rendering
//1. if statement
//2.ternary operators
//3. logical and operator

//if statement
//Conditional statement base on the user object
//We can call function expresion in JSX

//Showing paragraph text if there is location and hide it otherwise
function getLocation(location){
    if(location) {
        return <p>Location: {location}</p>
    }
}

//Template 2
let template2 = (
    <div>
    <h1>{user.name ? user.name: "Anonymous"}</h1>
    {user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
    </div>
);

let rootApp = document.getElementById("app");
ReactDOM.render(template2, rootApp)