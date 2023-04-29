import React, { useState } from "react";
import { db } from "../firebase";
import { auth } from "../firebase";
import firebase from "firebase/compat/app";

function SendMessage({scroll,userName}) {
  const [mesg, setMesg] = useState("");
  const [user, setUser] = useState("");

  async function sendMessage(e) {
    e.preventDefault();
    const { uid, photoUrl } = auth.currentUser;
    await db.collection("messages").add({
      text: mesg,
      photoUrl: null,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      userName:userName,
    });
    setMesg('');
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          onChange={(e) => {
            setMesg(e.target.value);
            setUser(userName);
          }}
        />
        <button type="submit" className="signButton">Send</button>
      </form>
    </div>
  );
}

export default SendMessage;
