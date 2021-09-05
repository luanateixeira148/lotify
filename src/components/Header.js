import React from 'react';
import "./Header.scss";
import BestRoute from './BestRoute';

export default function Header(props) {
  return (
    <div className="header">
        <div className ="wordmark">
          <h1>Lotify</h1>
        </div>


        <div className="best_route">
          <a href={props.bestRoute} >
            <BestRoute directions />
          </a>
        </div>
      
    </div>
  );
}
