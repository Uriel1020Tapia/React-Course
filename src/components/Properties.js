import React from "react";
import PropTypes from 'prop-types';

export default function RProperties(props){
    return(
        <div>
            <h2>{props.byDefault}</h2>
            <ul>
               <li>{props.text}</li> 
               <li>{props.number}</li> 
               <li>{props.bool ? 'True':'False'}</li> 
               <li>{props.arr.join(', ')}</li> 
               <li>{`${props.obj.id} -${props.obj.title}`}</li> 
               <li>{props.elementReact}</li>
               <li>{props.arr.map(props.function).join(", ")}</li>
               <li>{props.componentReact}</li>
            </ul>
        </div>
    );
}


RProperties.defaultProps = {
    byDefault:"Las props by default"
}

RProperties.propTypes = {
    number:PropTypes.number
};