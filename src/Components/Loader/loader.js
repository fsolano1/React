import React from "react";
import { JellyTriangle } from '@uiball/loaders';

function Loader(props) {
  return   <JellyTriangle 
   size={300}
   speed={1.75} 
   color={props.color || "darkblue"} 
   />;
}

export default Loader;

//<span class="loader"></span>