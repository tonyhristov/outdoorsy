import React from "react";

const RVContext = React.createContext({
  filter: "",
  changeFilter:(filter:string)=>{} 
});

export default RVContext;