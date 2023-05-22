import React, { useEffect, useState, useRef } from "react";
import SignOut from "./SignOut";
import { db } from "../firebase";
import { auth } from "../firebase";
import SendMessage from "./SendMessage";

function Chat({ username }) {
  const scrollRef = useRef(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        const messageData = snapshot.docs.map((doc) => doc.data());
        setMessages(messageData);
        scrollToLatestMessage();
      });

    return () => {
      unsubscribe();
    };
  }, []);

  const scrollToLatestMessage = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <SignOut displayName={username} />

      <div className="ChatWrapper">
        <div className="chatbox">
          <div className="msgbox" id="chat-scroll-container">
            {messages.map(({ id, text, photoURL, uid, userName }) => (
              <div
                key={id}
                className={`msgCon ${
                  uid === auth.currentUser.uid ? "j-end" : "j-start"
                }`}
              >
                <div
                  className={`msg ${
                    uid === auth.currentUser.uid ? "sent" : "received"
                  }`}
                >
                  <img src={photoURL} alt="noimg" className="profile" />
                  <div className="msgText">
                    <div className="text">{text}</div>
                    <div className="textinfo">by {userName}</div>
                  </div>
                </div>
              </div>
            ))}
            <div ref={scrollRef}></div>
          </div>
          <SendMessage
            userName={username}
            scrollToLatestMessage={scrollToLatestMessage}
          />
        </div>
      </div>
    </>
  );
}

export default Chat;
