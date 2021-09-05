import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import "./styles.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

export default function Popup(props) {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = io("/");

    socket.on('connect', event => {
      console.log("socket.io is connected");
    });

    socket.on('public', msg => {
      setMessages(prev => [msg, ...prev]);
    });

    // Ensures we disconnect to avoid memory leaks
    return () => socket.disconnect();
  }, []);

  return (
    <> 
      {messages.length > 0 && (
        <div className="popup">
          <div className="popup-close-header">
            <div className="popup-close-button">
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
          <div className="popup-container" onClick={props.onClick}>
            <div className="popup-header">
              <div className="header-left">
                <div className="header-logo">
                  <FontAwesomeIcon icon={faClipboardList} />
                </div>
                <h3>LOTIFY</h3>
              </div>
              <div className="header-right">
                <FontAwesomeIcon icon={faEllipsisH} />
              </div>
            </div>
            <div className="popup-body">
              <p><b>You have a Lotify reminder!</b></p>
              <p>{messages}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}