import React from 'react'; //optional
import "./styles.scss";
import Button from '../Button';
const classNames = require('classnames');

export default function Form(props) {

  return (
    <div className="form">
      <form>
        <input className="description" type="text" placeholder="Add description" />
        <input className="location" type="text" placeholder="Add location" />
      </form>
      <Button save />
    </div>
  );

}