import React, {Component} from 'react';

function StateAChild(props){
    return(
        <div>
            <h3>Child:{props.countChild}</h3>
        </div>
    );
}

export default class State extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        };

        // setInterval(()=>{
        //     this.setState({
        //         count:this.state.count +1
        //     })
        // },1000);
    }
    render(){
        return(
            <div>
                <h2>I'm a State</h2>
                <p>Parent:{this.state.count}</p>
                <StateAChild countChild={this.state.count}/>
            </div>
        );
    }
}