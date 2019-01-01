
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
# CONDTIOAL RENDERING

```javascript
//Conditional Rendering
//1. if statement
//2.ternary operators
//3. logical and operator

//1. if statement
//Conditional statement base on the user object
//We can call function expresion in JSX
function getLocation(location){
    if(location) {
        return location;
    }else {
        return "Unknown"
    }
}

```


