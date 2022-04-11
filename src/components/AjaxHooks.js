import React, { useState, useEffect } from "react";

function Pokemon({ avatar, name }) {
  return (
    <div className="containerImg">
      <figure>
        <img src={avatar} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    </div>
  );
}

export default function AjaxHooks() {
  const [pokemons, setPokemons] = useState([]);

  // useEffect(() => {

  //     let urlAPI = 'https://pokeapi.co/api/v2/pokemon/';

  //     fetch(urlAPI)
  //     .then((resp) => resp.json())
  //     .then((json) => {
  //         // console.log(json);
  //         json.results.forEach(el => {
  //             fetch(el.url)
  //             .then((resp)=> resp.json())
  //             .then((json) =>{
  //                 // console.log(json);
  //                 let pokemon = {
  //                     id:json.id,
  //                     name:json.name,
  //                     avatar:json.sprites.front_default
  //                 };

  //                 setPokemons((pokemons)=>[...pokemons,pokemon]);

  //             });
  //         });
  //     });
  // }, [])

  useEffect(() => {
    const getPokemons = async (url) => {
      let resp = await fetch(url),
        json = await resp.json();

      json.results.forEach(async (el) => {
        let resp = await fetch(el.url),
          json = await resp.json();
        // console.log(json);
        let pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
        };

        setPokemons((pokemons) => [...pokemons, pokemon]);
      });
    };

    let urlAPI = "https://pokeapi.co/api/v2/pokemon/";
    getPokemons(urlAPI);
  }, []);

  return (
    <>
      <h2>Peticiones Asincronas en Hooks</h2>
      <div className="wrapper">
        {pokemons.length === 0 ? (
          <h3>Cargando ...</h3>
        ) : (
          pokemons.map((el) => (
            <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
          ))
        )}
      </div>
    </>
  );
}
