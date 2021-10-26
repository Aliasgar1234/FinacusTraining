import React from "react";

const Input = (props,ref) =>{
    return(
        <div>
            <label htmlFor={props.input.it}>{props.label}</label>
            <input ref={ref} {...props.input}/>
        </div>
    );
};


export default Input;