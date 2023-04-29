import React from 'react'
import { useRef, useEffect } from "react";

export const Places = () => {
    const autoCompleteRef = useRef();
    const inputRef = useRef("");
    const nameRef = useRef("");
   //  const options = {
   //   componentRestrictions: { country: "in" },
   //   fields: ["address_components", "geometry", "icon", "name"],
   //   types: ["establishment"]
   //  };
   //  useEffect(() => {
   //   autoCompleteRef.current = new window.google.maps.places.Autocomplete(
   //    inputRef.current,
   //    options
   //   );
   //  }, []);
   
   const handleClick = ()=>{
     console.log(nameRef.current)
   }
   
     return (
       <div className="App">
       HIi
       <form>
         <input ref={nameRef}></input>
       {/* <input ref={inputRef} /> */}
       <button onClick={handleClick()}>Submit</button>
       </form>
       </div>
     );
}

export default Places;
