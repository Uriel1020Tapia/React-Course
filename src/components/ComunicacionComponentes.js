import React, {Component} from "react";

export default class Padre extends Component{

    state = {
        count:0
    };

    increment = (e) =>{
        this.setState({
            count: this.state.count +1
        });
    }
    render(){
        return(
            <>
            <h2>Comunciación entre componentes</h2>
            <p>Contador <b>{this.state.count}</b></p>
            <Child msg="Mensaje hijo 1" incrementContador={this.increment}/>
            <Child msg="Mensaje hijo 2" incrementContador={this.increment}/>
            </>
           )
    }
}

function Child(props){
    return (
        <>
            <h4>{props.msg}</h4>
            <button className="btn rbtn-primary" onClick={props.incrementContador}>+</button>
        </>
    )
}