import React,{Component} from "react";

export  class EventsES6 extends Component{

    constructor(props){
        super(props);
        this.state = {
            contador:0,
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment(){
        this.setState({
            contador:this.state.contador + 1
        })
    }
    decrement(){
        this.setState({
            contador:this.state.contador - 1
        })
    }
    render(){
        return(
            <div>
                <h2>Eventos de componente de clase ES6</h2>
                <button className="btn rbtn-primary" onClick={this.decrement}>-</button>
                <button className="btn rbtn-primary" onClick={this.increment}>+</button>
                <h3>{this.state.contador}</h3>
            </div>
        );
    }
}

//porperties inizializer
export  class EventsES7 extends Component{

    state = {
        contador:0,
    };
    //arrow function

    increment = (e)=>{
        console.log("increment es7");
        this.setState({
            contador:this.state.contador + 1
        })
    }
    decrement = (e)=>{
        console.log("decrement es7");
        this.setState({
            contador:this.state.contador - 1
        })
    }

    render(){
        return(
            <div>
                <h2>Eventos de componente de clase ES7</h2>
                <button className="btn rbtn-primary" onClick={this.decrement}>-</button>
                <button className="btn rbtn-primary" onClick={this.increment}>+</button>
                <h3>{this.state.contador}</h3>
            </div>
        );
    }
}

// function Button(props){
//     return(<button className="btn rbtn-primary" onClick={props.myOnClick}>Botón component</button>)
// }

// const Button = (props)=> <button className="btn rbtn-primary" onClick={props.myOnClick}>Botón component</button>;

const Button = ({myOnClick})=> <button className="btn rbtn-primary" onClick={myOnClick}>Botón component</button>;



export class MasSobreEventos extends Component{

    handleClick = (e,msg)=>{
        console.log(e);
        console.log(e.target);
        console.log(e.nativeEvent);
        console.log(e.nativeEvent.target);
        console.log(msg)
    }

    render(){
        return(
            <div>
                <h2>Más sobre eventos </h2>
                <button className="btn rbtn-primary" onClick={(e) => this.handleClick(e,"Hola pasando parametro desde un evento")}>Saludar</button>
                {/* evento personalizado */}
                {/* <Button onClick={(e) => this.handleClick(e,"Hola pasando parametro desde un evento")}/> */}
                <Button myOnClick={(e) => this.handleClick(e,"Hola pasando parametro desde un evento")}/>
            </div>
        );
    }
}
