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
true ? "Emma": "Anonymous" This means if it's true use Emma and use Anonymous if false
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



