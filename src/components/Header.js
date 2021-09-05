import React from 'react';
import "./Header.scss";
import Button from './Button';
import BestRoute from './BestRoute';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faDirections } from '@fortawesome/free-solid-svg-icons';
{/* <style>
@import url('https://fonts.googleapis.com/css2?family=Kaisei+Tokumin&display=swap');
</style> */}

export default function Header(props) {
  return (
    <div className="header">
        <div className ="wordmark">
          <h1>Lotify</h1>
        </div>


        <div className="best_route">
          <a href={props.bestRoute} target="_blank" rel="noreferrer">
            <BestRoute directions />
          </a>
        </div>
      
    </div>
  );
}
