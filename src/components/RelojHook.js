import React, { useState,useEffect } from 'react';

function Reloj({hour}){
    return <h3>{hour}</h3>
}

export default  function RelojHooks(){
    const [hour, setHour] = useState(new Date().toLocaleTimeString());
    const [show, setShow] = useState(false);

    useEffect(() => {
        let temporizador;

        if(show){
            temporizador = setInterval(()=>{
                setHour(new Date().toLocaleTimeString());
            },1000);
        }else{
            clearInterval(temporizador);           
        }
        return()=>{
            // console.log("fase de desmontaje");
            clearInterval(temporizador); 
        }

    }, [show]);
    

    return (
        <>
            <h2>Reloj con Hooks</h2>
            {show && <Reloj hour={hour}/>}
               <div className="containerBtns">
               <button className="btn rbtn-primary" onClick={() => setShow(true)}>▶️</button>
                <button className="btn rbtn-primary" onClick={()=> setShow(false)}>⏹️</button>
               </div>
        </>
    )
}
