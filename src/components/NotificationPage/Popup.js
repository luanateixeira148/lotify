import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import "./styles.scss";

export default function Popup(props) {

  const [messages, setMessages] = useState([]);

  const clear = function () {
    setMessages([]);
  };

  useEffect(() => {
    const socket = io("/");

    socket.on('connect', event => {
      console.log("connected");
    });

    socket.on('public', msg => {
      setMessages(prev => [msg, ...prev]);
    });

    // ensures we disconnect to avoid memory leaks
    return () => socket.disconnect();
  }, []);

  console.log(messages);

  return (
    <>
      
      {messages.length > 0 && (
        <div className="popup-container">
          <div className="popup-header">
            <img src="images/shoppers.png" alt="" />
            <h3>LOTIFY</h3>
          </div>
          <p><b>You have a location reminder!</b></p>
          <p>{messages}</p>
        </div>
      )}

    </>
  );
}