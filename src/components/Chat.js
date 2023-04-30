import React, { useEffect, useState,useRef } from "react";
import SignOut from "./SignOut";
import { db } from "../firebase";
import { auth } from "../firebase";
import SendMessage from "./SendMessage";

function Chat({username}) {
  const scroll = useRef()
  const [mesg, setMesg] = useState([]);

  useEffect(() => {
    db.collection('messages')
      .orderBy('createdAt')
      .limit(50)
      .onSnapshot((snapshot) => {
        setMesg(snapshot.docs.map((doc) => doc.data()));
      });
    console.log(mesg);
  }, []);

  return (
    <>
          <SignOut displayName={username}/>

    <div className="ChatWrapper">
      <div className="chatbox">
        <div className="msgbox">
        {mesg.map(({ id, text, photoURL, uid,userName}) => (
          <div  className={`msgCon ${
            uid === auth.currentUser.uid ? "j-end" : "j-start"
          }`}>   <div
          key={id}
          className={`msg ${
            uid === auth.currentUser.uid ? "sent" : "received"
          }`}
        >
          <img src={photoURL} alt="noimg" className="profile"/>
          <div className="msgText"> 
          <div className="text">{text}</div>
         
          <div className="textinfo">by {userName}</div></div>
        </div></div>
     
      ))}
        </div>
     
       <SendMessage scroll={scroll} userName={username}/>
            <div ref={scroll}></div>
      </div>
     
    </div></>
  );
}


export default Chat;
