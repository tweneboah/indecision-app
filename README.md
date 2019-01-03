This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run this app

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


# MY NOTES 

# 03/012019


# NESTED COMPONENT AND PROPS

1. This is help component to communicate with each other

2. For if you need diiferent stlye of the same component to appear on different page on the site

3. When passing a data in when instantiating/calling  a component to have different style or function is call props

4. You can pass strings, objects, functions, boolean to props


```javascript
//Nested component
class IndecisionApp extends React.Component {
    
    render(){
        const title = "Indecision";
        const subTitle = "Put your life in the hands of a computer";
        const option = ["Thing 1", "Thing 2", "Thing 3", "JS"]

        return(
            <div>
              <Header title ={title} />
              <Header subTitle = {subTitle}/>
              <Action />
              <Options options = {option}/>
              <Addptions />
            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        
        return (
            <div>
             <h1>{this.props.title}</h1>
              <h2>{this.props.subTitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render(){
        return (
            <div>
             <button>What should I do?</button>
           </div>
        );
    }
}
class Options extends React.Component {
    render(){
        return (
            <div>
             <Addptions />
             {this.props.options.length}
             <Option />
            
            </div>
        );
    }


}
class Option extends React.Component {
    render(){
        return (
            <div>
             <li></li>
            </div>
        );
    }
}

class Addptions extends React.Component {
render(){
    return(
        <div>
          <p>Add options components here</p>
        </div>
    );
}
}



ReactDOM.render(<IndecisionApp /> , document.getElementById("app"));
```

# REACT COMPONENTS
------------------------------------------------------------------------------------------------
1. Components require render() method
2. The render() method require a return keyword
3. React components are re-usable
4. React component class name must start with an uppercase letter if not,it won't work this help to differentiate between react component and html tag

```javascript
class Header extends React.Component {
    render(){
        return <p>This is from a header</p>;
    }
}
const jsx = (
    <div>
    <h1>Title</h1>
    <Header/>
    <Header/>
    <Header/>
    </div>
);

ReactDOM.render(jsx, document.getElementById("app"));


class Header extends React.Component {
    render(){
        return (
            <div>
             <h1>Indecision</h1>
              <h2>Put your life in the hands of a computer</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render(){
        return (
            <div>
             <button>What should I do?</button>
           </div>
        );
    }
}
class Options extends React.Component {
    render(){
        return (
            <div>
             <p>Options component here</p>
            </div>
        );
    }
}
class Addptions extends React.Component {
render(){
    return(
        <div>
          <p>Add options components here</p>
        </div>
    );
   }
}

const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <Addptions />

    </div>
);

ReactDOM.render(jsx, document.getElementById("app"));
```

# CLASSES AND SUB-CLASS (super() Class)

```javascript
//CLASSES
//It's a blue print
// We can create instanes of object from class
// It has a constructor that instantiate functions and properties inside the class


class Person {
    constructor(name = "Anonymous", age =0){
        this.name = name;
        this.age = age;
    }

    getGreetings(){
        return `Hi. I am ${this.name}!`;
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old`;
    }
}

//Subclass - SuperClass
//This is a sub class created based on the parent class
//This means there unique properties which the parent class don't.
//Subclass can use the properties of the parent classs
//The sub class can overide functions and properties of the parent class
//We use super() to call the functions and properties from the parent class
//Always call the super() and pass in the argument before creating the unique property 

//Super() refers to the parent class

//We can overide parent class method


class Students extends Person {
    constructor(name, age, major){
       super(name, age);
       this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
       let description = super.getDescription();
        if(this.hasMajor()){
            // description += `Their major is ${this.major}.`
        }
    }
}


const me = new Students("Emmmanuel", 30, "Teaching");
console.log(me.getDescription());

const other = new Students();
console.log(other);

```
# NESTED COMPONENT

```javascript
//Import React and react DOM libraries
import React from "react";
import ReactDOM from "react-dom";

// COMPONENTS
//Components require render() method
//The render() method require a return keyword
//React components are re-usable
//React component class name must start with an uppercase letter if not,it won't work this help to differentiate between react component and html tag

//Nested component
class IndecisionApp extends React.Component {
    render(){
        return(
            <div>
              <Header />
              <Action />
              <Options />
              <Addptions />
            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        return (
            <div>
             <h1>Indecision</h1>
              <h2>Put your life in the hands of a computer</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render(){
        return (
            <div>
             <button>What should I do?</button>
           </div>
        );
    }
}
class Options extends React.Component {
    render(){
        return (
            <div>
             <Addptions />
             <p>Options component here</p>
             <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render(){
        return (
            <div>
             Option Component Here
            </div>
        );
    }
}

class Addptions extends React.Component {
render(){
    return(
        <div>
          <p>Add options components here</p>
        </div>
    );
}
}

ReactDOM.render(<IndecisionApp /> , document.getElementById("app"));
```
# 02/01/2019
# MAP  

1. Map is use to create exact copy of an array where we can manipulate the newly created array.

2. JSX Support Array

3. You can directly display array inside JSX

```javascript
const numbers = [ 4, 9, 10, 43, 9]
const multiply = ()=>{
    numbers.map((number)=>{
        console.log(`"The Multiplied Number is " ${number * 2}`)
    })
};

multiply()
```
# Displaying array to the UI using JSX

1. key = number is a property we asign to to have a unique id

```javascript
const numbers = [2, 9, 20, 10, 6];

const renderApp = ()=>{
    const template = (
        <div>
        {
            numbers.map((number)=>{
               return <p key ={number}>The multiplied value is: {number * 2}</p>
            })
        }
        </div>
    );
    ReactDOM.render(template, rootApp);
}
renderApp()
```

# DISPLAYING LIST OF DATA TO UI USING A FORM
```javascript

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

//ARRAY
const renderApp = ()=>{
    const template = (
        <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.title}</p> }
        <p>{app.options.length > 0 ? "here are your options" : "No options"}</p>
        <p>{app.options.length}</p>
        <button onClick ={onRemoveAll}>Remove All</button>
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
```

# PICKING OPTIONS

```javascript
const app = {
    title: "My title",
    subtitle: "My subtitle",
    options: []
}

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
```
=======
# MY NOTES  02/01/19

# FORM INPUT
```javascript

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
    renderApp(); //Refresh my data for update
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
```



# DATA BINDING - RE-RENDERING
```javascript
let count = 0;
const addOne = ()=>{
    //count = count + 1;
    count++
    renderCounterApp();
};

const minusoNE = () => {
    count--
    renderCounterApp();
}

const reset = () => {
    count = 0;
    renderCounterApp();
}

const rootApp = document.getElementById("app");

const renderCounterApp = ()=>{
    const templateTwo = (
        <div>
        <h1>Count : {count}</h1>
        <button id = "" className="" onClick = {addOne}>+1</button>
        <button id = "" className="" onClick = {minusoNE}>-1</button> 
        <button id = "" className="" onClick = {reset}>reset</button>
    
        </div>
    );
    ReactDOM.render(templateTwo, rootApp);
}
renderCounterApp();
```

#  EVENTS AND ATTRIBURES -REACT
```javascript

let count = 0;
const addOne = ()=>{
    console.log("Add one");
};

const minusoNE = () => {
    console.log("Minus one");
}

const reset = () => {
    console.log("reset")
}
const templateTwo = (
    <div>
    <h1>Count : {count}</h1>
    <button id = "" className="" onClick = {addOne}>+1</button>
    <button id = "" className="" onClick = {minusoNE}>-1</button> 
    <button id = "" className="" onClick = {reset}>reset</button>
    </div>
);


const rootApp = document.getElementById("app");
ReactDOM.render(templateTwo, rootApp)
```
# CONDTIOAL RENDERING
## 1. if statement
```javascript
//1. if statement
//2.ternary operators
//3. logical and operator

const user = {
    name: "Tweneboah",
    age: 29,
    location: ""
}
//Conditional statement base on the user object
//We can call function expresion in JSX
function getLocation(location){
    if(location) {
        return location;
    }else {
        return "Unknown"
    }
}

let rootApp = document.getElementById("app");
ReactDOM.render(userTemplate, rootApp)


//Showing paragraph text if there is location and hide it otherwise
function getLocation(location){
    if(location) {
        return <p>Location: {location}</p>
    }
}

//Template 2
let template2 = (
    <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    {getLocation(user.location)}
    </div>
);

let rootApp = document.getElementById("app");
ReactDOM.render(template2, rootApp)
```
//-------------------------------------------------------------------

# 2. TERNARY OPERATOR
true ? "Emma": "Anonymous" This means if it's true use Emma and use Anonymous if false.

Boolean and null are ignore by JSX
### Determing if a username exist

```javascript
const user = {
    name: "Tweneboah",
    age: 29,
    location: ""
}
let template2 = (
    <div>
    <h1>{user.name ? user.name: "Anonymous"}</h1>
    <p>Age: {user.age}</p>
    </div>
);
let rootApp = document.getElementById("app");
ReactDOM.render(userTemplate2, rootApp)
```
//------------------------------------------------------------------

# Logical and Operator (true &&)
Showing a content or a paragraph base on a condition
### true && "some age", 
this means if the first value is truthy, it will use the it value

### false && "some age",
It means if the first value is false, it will return false

### Display age if the user age is greater than 18
```javascript

const user = {
    name: "Tweneboah",
    age: 29,
    location: ""
}
let template2 = (
    <div>
    <h1>{user.name ? user.name: "Anonymous"}</h1>
    {user.age >= 18 && <p>Age: {user.age}</p>}
    </div>
);

let rootApp = document.getElementById("app");
ReactDOM.render(template2, rootApp)
```
### Checking if a user age exist at all

```javascript
let template2 = (
    <div>
    <h1>{user.name ? user.name: "Anonymous"}</h1>
    {(user.age && user.age >= 18 )&& <p>Age: {user.age}</p>}
    </div>
);
```

# CODE CHALENGE
1.Only render the subtitle (and p tag) if subtitle exist - use logical && operator
2. Render new p tag if options.lenght > 0 "Here are your options " "No options"
```javascript
const app = {
    title: "My title",
    subtitle: "My subtitle",
    options: ["one", "two", "three"]
}

const appTemplate = (
    <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.title}</p> }
    <p>{app.options.lenght > 0 ? "here are your options" : "No options"}</p>
    </div>
);



```
# PASSING OBJECT TO JSX

```javascript
const user = {
    name: "Tweneboah",
    age: 29,
    location: ""
}

//User Template 
let userTemplate = (
    <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {getLocation(user.location)}</p>
    </div>
);

let rootApp = document.getElementById("app");
ReactDOM.render(userTemplate, rootApp)

```



