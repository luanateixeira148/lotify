import React from 'react';
import "./BestRoute.scss";

export default function BestRoute(props) {

  return (
    <button
      className="bestRoute"
      onClick={props.onClick}
    >
      BEST ROUTE
    </button>
  );
}