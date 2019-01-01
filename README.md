This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run this app

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# MY NOTES
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



