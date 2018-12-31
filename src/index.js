//Import React and react DOM libraries
import React from "react";
import ReactDOM from "react-dom"

//Create react component
const App = ()=>{
    return <div>Hi there bhg</div>
}


//Take react component and show it to the screen
ReactDOM.render(
    <App />, //This refers to the component we created
    document.querySelector("#root")//Displaying to UI
);