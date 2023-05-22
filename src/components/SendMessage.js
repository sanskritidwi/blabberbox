import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { auth } from "../firebase";
import firebase from "firebase/compat/app";

function SendMessage({ userName, scrollToLatestMessage }) {
  const [mesg, setMesg] = useState("");

  async function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await db.collection("messages").add({
      text: mesg,
      photoURL: photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      userName: userName,
    });
    setMesg("");
    scrollToLatestMessage();
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          onChange={(e) => setMesg(e.target.value)}
          value={mesg}
        />
        <button type="submit" className="signButton">
          Send
        </button>
      </form>
    </div>
  );
}

export default SendMessage;
