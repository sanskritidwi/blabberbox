import { useRef, useEffect, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import Signin from "./components/Signin";
import Chat from "./components/Chat";
import { auth } from './firebase';
import '../src/styles/css/all.css';


function App() {
  
const [user] = useAuthState(auth);

if (user) {
 const displayName = user.displayName;
  return (
    <div>
      <Chat username={displayName}/>
    </div>
  );
} else {
  return(
    <>  <Signin/>
    </>
  )
}

 
}

export default App;
