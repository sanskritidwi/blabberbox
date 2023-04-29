import React, { useState } from "react";
import { auth } from "../firebase";

function SignOut({displayName}) {
  return (
    <>
   
    <div className="SignOutWrapper">
      <div className="left"> <div className='heading'>BlabberBox</div>
        <div className='tag'>Your space to chat</div></div>
   <div className="right">
   <div className="welcome"> {displayName}</div>

<button
  onClick={() => {
    auth.signOut();
  }}
  className="signButton"
>
  SignOut
</button>
   </div>
     
    </div></>
  );
}

export default SignOut;
