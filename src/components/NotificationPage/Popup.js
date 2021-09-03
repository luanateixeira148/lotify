import React, { useState, useEffect } from 'react';
import axios from 'axios';
import socketio from 'socket.io';
import "./styles.scss";
const classNames = require('classnames');

export default function Popup(props) {

  const [message, setMessage] = useState('');

  const toggleMessage = () => {
    message ? setMessage('') : setMessage('Hello There!');
  }

  // Websocket connection

  // useEffect(() => {
  //   const socket = socketio();
  //   socket.on("connect", data => {
  //     console.log(data)
  //   });
  // }, []);

// build a page with message state (message, setMessage), make a button (clear/fill the state with some dummy data)
  return (
    <div>
      <button onClick={toggleMessage}>MESSAGE</button>
      {message.length > 0 && (<h2>{message}</h2>)}
    </div>
  )
}