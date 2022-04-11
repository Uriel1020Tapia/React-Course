import React, { useState,useEffect } from 'react';

export default function ScrollHooks(){
    
    const [scrollY, setScrollY] = useState(0);
   
    useEffect(() => {
        // console.log("Moviendo el scroll");

         //Creamos una función para actualizar el estado
        const detectarScroll = () => setScrollY(window.pageYOffset);

         //Nos suscribimos al evento scroll de window
        window.addEventListener("scroll",detectarScroll);
 
        //Devolvemos una función para desuscribir el evento
        return ()=> window.removeEventListener("scroll",detectarScroll);
    });

    useEffect(() => {
        // console.log("Fase de Montaje");
    },[]);

    useEffect(() => {
        // console.log("Fase de Actualizacion");
    });

    useEffect(() => {
        return () => {
            // console.log("Fase de DESMONTAJE");

        }
    });

    return( 
        <>
            <h2>Hooks - useEffect con ciclo de vida</h2>
            <p>Scroll Y del navegador {scrollY}px</p>
        </>
    );
}