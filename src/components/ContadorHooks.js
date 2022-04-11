import React, { useState } from 'react';

export default function ContadorHooks(props){

    const [contador,setContador] = useState(0);


    const increment = () => setContador(contador < 10 ? contador + 1 : 10);
    const decrement = () => setContador(contador === 0 ? 0 : contador - 1);

    return(
        <>
            <h2>Hooks -useState</h2>
            <nav>
                <button className="btn rbtn-primary" onClick={decrement}>-</button>
                <button className="btn rbtn-primary" onClick={increment}>+</button>
            </nav>
            <h2>Contador de {props.titulo}</h2>
            <h3>{contador}</h3>
        </>
    );
}

ContadorHooks.defaultProps = {
    titulo :"Clicks"
}