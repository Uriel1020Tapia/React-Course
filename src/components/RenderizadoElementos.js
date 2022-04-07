import React, {Component} from 'react';
import data from "../helpers/data.json";

function ElementList(props){
    return(
        <li>
            <a href={props.framework.site} target="_blank" rel='noreferrer'>{props.framework.name}</a>
        </li>
    );
}
export default class RenderizadoElementos extends Component{
    constructor(props){
        super(props);
        this.state = {
            seasons:["Primavera","Verano","Otoño","Invierno"]
        }
    }
    render(){
        
        return(
            <div>
                <h2>Renderizado de elementos</h2>
                <h3>Estaciones del año</h3>

                <ol>
                    {
                        this.state.seasons.map((el,index)=> <li key={index}>{el}</li>)
                    }
                </ol>
                <h3>
                    Frameworks frontend JS
                </h3>
                <ul>
                    {
                        data.frameworks.map((el) => <ElementList key={el.id} framework={el}/>)
                    }
                </ul>
            </div>
        )
    }
}
