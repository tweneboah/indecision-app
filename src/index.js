//Import React and react DOM libraries
import React from "react";
import ReactDOM from "react-dom"





//Passing  to render
const user = {
    name: "Tweneboah",
    age: 29,
    location: ""
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
function getLocation(location){
    if(location) {
        return location;
    }else {
        return "Unknown"
    }
}

//Template 2
let template2 = (
    <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {getLocation(user.location)}</p>
    </div>
);

let rootApp = document.getElementById("app");
ReactDOM.render(template, rootApp)