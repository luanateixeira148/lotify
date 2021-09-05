import React from 'react';
import "./Header.scss";
import Button from './Button';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faDirections } from '@fortawesome/free-solid-svg-icons';

export default function Header(props) {
  return (
    <div className="header">
      <div className="wordmark">
        <h1>Lotify</h1>
      </div>
      <div className="best_route">
        <a href={props.bestRoute} target="_blank" rel="noreferrer">
          <Button directions />
        </a>
      </div>
    </div>
  );
}
