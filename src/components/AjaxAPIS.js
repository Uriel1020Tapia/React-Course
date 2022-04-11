import React, { Component } from 'react'

function Pokemon(props){
    return (
        <div className='containerImg'>
            <figure>
            <img src={props.avatar} alt={props.name}/>
            <figcaption>{props.name}</figcaption>
        </figure>
        </div>
    )
}
export default class AjaxApis extends Component{

    state = {
        pokemons:[],
    }

    componentDidMount(){
        let urlAPI = 'https://pokeapi.co/api/v2/pokemon/';

        fetch(urlAPI)
        .then((resp) => resp.json())
        .then((json) => {
            // console.log(json);
            json.results.forEach(el => {
                fetch(el.url)
                .then((resp)=> resp.json())
                .then((json) =>{
                    // console.log(json);
                    let pokemon = {
                        id:json.id,
                        name:json.name,
                        avatar:json.sprites.front_default
                    };

                    let pokemons = [...this.state.pokemons,pokemon];

                    this.setState({pokemons})
                });
            });
        });
    }
    render(){
        return (
            <>
                <h2>Peticiones Asincronas en componentes de clase</h2>
                <div className="wrapper">
                    {this.state.pokemons.length === 0 ? <h3>Cargando ...</h3> : this.state.pokemons.map((el) => <Pokemon key={el.id} name={el.name} avatar={el.avatar}/>)}
                </div>
            </>
        )
    }
}
