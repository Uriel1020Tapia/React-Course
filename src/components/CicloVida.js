import React, {Component} from "react";

class Reloj extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }
    componentWillUnmount(){
        console.log(3,"El componente ha sido eliminado del DOM");
    }

    render(){
        return <h3>{this.props.hour}</h3>
    }
}
export default class CicloVida extends Component{

 constructor(props){
        super(props);
        console.log(0,"El componente se inicializa aun no esta en el DOM");

        this.state = {
            hour:new Date().toLocaleTimeString(),
            show:false
        }

        this.temporizador = null;

}

componentDidMount(){
    console.log(1,"El componente ya se encuentra en el DOM");
}

componentDidUpdate(prevProps,prevState){
    console.log(2,"El estado o las props del componente han cambiado");
    console.log(prevProps);
    console.log(prevState);
}


tictac = ()=> {
    this.temporizador = setInterval(()=>{
        this.setState({
            hour: new Date().toLocaleTimeString()
        })
    },100)
}

play = ()=>{
    console.log("play");
    this.tictac();
    this.setState({
        show:true
    });
}
stop = ()=>{
    console.log("stop");

    clearInterval(this.temporizador);
    this.setState({
        show:false
    });
}

    render(){
        console.log(4,"El componente se dibuja o redibuja por un cambio en el DOM o state")
        return(
            <>
                <h2>Ciclo de vida componentes de clase</h2>

                {this.state.show && <Reloj hour={this.state.hour}/>}
               <div className="containerBtns">
               <button className="btn rbtn-primary" onClick={this.play}>▶️</button>
                <button className="btn rbtn-primary" onClick={this.stop}>⏹️</button>
               </div>
            </>
        )
    }
}   