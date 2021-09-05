import React from 'react';
import "./BestRoute.scss";

const classNames = require('classnames');

export default function BestRoute(props) {

  // const renderText = function() {
  //   let text;
  //   if (props.directions) {
  //     text = <h5>BEST ROUTE</h5>;
  //   }
  //   return text;
  // };

  // // const bestRouteClass = classNames("bestRoute", {
  // //   "bestRoute": props.directions
  // // });

  return (
    <button
      className="bestRoute"
      onClick={props.onClick}
    >
      BEST ROUTE
    </button>
  );
}