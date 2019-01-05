//Import React and react DOM libraries
import React from "react";
import ReactDOM from "react-dom";


class IndecisionApp extends React.Component {

    //Using component state
    constructor(props){
        super(props);
        this.state = {
            options: []
        }
    }

    render(){ 
        const title = "Indecision";
        const subTitle = "Put your life in the hands of a computer";
       

        return(
            <div>
              <Header title ={title} />
              <Header subTitle = {subTitle}/>
              <Action hasOptiopns = {this.state.options.length > 0} />
              <Options options = {this.state.options}/>
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
    handlePick(){
alert("Handle pick")
    }
    render(){
       
        return (
            <div>
             <button onClick = {this.handlePick} disabled = {!this.props.hasOptiopns}>What should I do?</button>
           </div>
        );
    }
}


//Remove all buttons
class Options extends React.Component {

constructor(props){
super(props);
this.handleRemoveAll = this.handleRemoveAll.bind(this);
}

    handleRemoveAll(){
     console.log(this.props.options)
    }
    
    render(){
        console.log(this.props)
        return (
            <div>
            {
                this.props.options.map((option) => <Option key = {option} optionText = {option} />)
            }
            <button onClick = {this.handleRemoveAll}>Remove All</button>
            </div>
        );
    }


}


class Option extends React.Component {
    render(){
        return (
            <div>
             {this.props.optionText}
            </div>
        );
    }
}



class Addptions extends React.Component {

handleAddOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if(option){
        alert(option);
    }
}
render(){
    return(
        <div>
         <form onSubmit = {this.handleAddOption}>
             <input type = "text" name ="option"/>
             <button>Add Option</button>
         </form>
        </div>
    );
}
}

ReactDOM.render(<IndecisionApp /> , document.getElementById("app"));