import React from 'react';
import "./Header.scss";

export default function Header(props) {
  return (
    <div className="header">
      <h1>Lotify</h1>
      <a href={props.bestRoute} target="_blank" rel="noreferrer">
        <button>
          Best Route
        </button>
      </a>
    </div>
  );
}
