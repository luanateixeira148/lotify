import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import "./notification-page.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

export default function Popup(props) {

  const [notifications, setNotifications] = useState([]);

  /* makes connection with socket.io to receive the notification */
  useEffect(() => {
    const socket = io("/");
    socket.on('connect', event => {
      console.log("socket.io is connected");
    });

    socket.on('public', notification => {
      setNotifications(prev => [notification, ...prev]);
    });

    /* Ensures we disconnect to avoid memory leaks */
    return () => socket.disconnect();
  }, []);

  const listOfNotifications = notifications.map((notification, i) => {
    return <li key={i} className="popup">
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
              <p>{notification}</p>
            </div>
          </div>
    </li>;
  });

  return (
      <ul className="popup-list">
          {listOfNotifications}
      </ul>
  );
}