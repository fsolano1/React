import React from 'react'

function Button(props) {
  const stylesButton = {
    backgroundColor: props.color || "blue",
    color: "white",
    padding: "4px 10px",
  };
    return ( 
    <button onClick={props.onClick} style = {stylesButton}>{props.children} </button>
    );
}

export default Button;