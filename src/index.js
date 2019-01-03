//Import React and react DOM libraries
import React from "react";
import ReactDOM from "react-dom";


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
            {
                this.props.options.map((option) => <p key = {option}>{option}</p>)
            }
            
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