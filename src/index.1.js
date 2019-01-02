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

const onRemoveAll = ()=>{
    app.options = [];
    renderApp();
}

const onMakeDecision = ()=>{
    const randomNumber = Math.floor(Math.random() * app.options.length);

    const option = app.options[randomNumber]
   alert(option);
}
const rootApp = document.getElementById("app");

//ARRAY
const renderApp = ()=>{
    const template = (
        <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.title}</p> }
        <p>{app.options.length > 0 ? "here are your options" : "No options"}</p>
        <p>{app.options.length}</p>
        <button onClick ={onRemoveAll}>Remove All</button>
        <button disabled = {app.options.length === 0} onClick ={onMakeDecision}>What Should I do?</button>
        <ol>
            {
                app.options.map((option)=>{
                return  <li key ={option}>{option}</li>  
                })
            }
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




//MAP
//Map is use to create exact copy of an array where we can manipulate the newly created array

