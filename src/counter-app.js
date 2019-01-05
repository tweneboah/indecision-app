
//Import React and react DOM libraries
import React from "react";
import ReactDOM from "react-dom";

//Component State
class Counter extends React.Component{
    //Binding these functions
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinuesOne = this.handleMinuesOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }
    handleAddOne (){
        this.setState((prevState) =>{
            return {
                count: prevState.count + 1
            }
        })
    }
    
    handleMinuesOne() {
      this.setState((prevState) =>{
          return {
              count: prevState.count -1
          }
      })
    }
    
    handleReset(){
        this.setState((prevState) =>{
            return {
                count: prevState.count = 0
            }
        })
    }
    render(){
        return(
            <div>
              <h1>Count: {this.state.count} </h1>
              <button onClick = {this.handleAddOne}>+1</button>
              <button onClick = {this.handleMinuesOne}>-1</button>
              <button onClick = {this.handleReset}>Reset</button>
            </div>
        );
    }
}
//METHODS


ReactDOM.render(<Counter />, document.getElementById("app"));
