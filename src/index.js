//Import React and react DOM libraries
import React from "react";
import ReactDOM from "react-dom";

// COMPONENTS
//Components require render() method
//The render() method require a return keyword
//React components are re-usable
//React component class name must start with an uppercase letter if not,it won't work this help to differentiate between react component and html tag

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