import React from 'react';
import firebase from 'firebase/compat/app';
import { auth } from '../firebase';
// import 'firebase/compat/auth';

function Signin() {

    const signInWithGoogle = ()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

  return (
    <div className='SigninWrapper'>
      <div className='box'>
        <div className='heading'>BlabberBox</div>
        <div className='tag'>Your space to chat</div>
      <button onClick = {()=>{signInWithGoogle()}} className='signButton'>Sign in With Google</button>
      </div>
    </div>
  )
}

export default Signin