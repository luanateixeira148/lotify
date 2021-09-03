import React from 'react';
import "./Header.scss";

export default function Header(props) {
  // console.log('props.bestRoute',props.bestRoute); //array of objects
  // console.log('props.bestRoute[0]',props.bestRoute[0]); //object with key called best_route_url

  // without the conditional statement, props.bestRoute[0] becomes undefined
  const best_route_url = props.bestRoute[0]? props.bestRoute[0].best_route_url : ''

  return (
    <div className="header">
      <h1>Lotify</h1>
      <a href={best_route_url}><button>Best Route</button></a>
    </div>
  );

}
