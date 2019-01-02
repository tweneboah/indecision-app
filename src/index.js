//Import React and react DOM libraries
import React from "react";
import ReactDOM from "react-dom";


const app = {
    title: "My title",
    subtitle: "My subtitle",
    options: []
}

const onFormSubmit = (e)=>{
e.preventDefault();

//get the value user  type
const option = e.target.elements.option.value;
if(option){
    app.options.push(option);
    e.target.elements.option.value = "";
    renderApp();
}
}
const rootApp = document.getElementById("app");

const onRemoveAll = ()=>{
    app.options = [];
    renderApp();
}

const renderApp = ()=>{
    const template = (
        <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.title}</p> }
        <p>{app.options.length > 0 ? "here are your options" : "No options"}</p>
        <p>{app.options.length}</p>
        <button onClick ={onRemoveAll}>Remove All</button>
        <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
    <form onSubmit = {onFormSubmit}>
    <input type ="text" name = "option"/>
    <button>Add option</button>
    </form>
        </div>
    );
    ReactDOM.render(template, rootApp);
}
renderApp()




