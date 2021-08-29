import React from 'react'; //optional
import "./styles.scss";
const classNames = require('classnames');

export default function Form(props) {

  return (
    <div className="form">
      <form>
        <input type="text" placeholder="Add description"/>
        <input type="text" placeholder="Add location"/>
      </form>
    </div>
  );

}