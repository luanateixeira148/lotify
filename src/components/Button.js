import React from 'react'; //optional
import "./Button.scss";
const classNames = require('classnames');

export default function Button(props) {
  //assign props based on the button class names
  const buttonClass = classNames("button", {
    "button--save": props.save,
    "button--delete": props.delete,
    "button--edit": props.edit,
    "button--add": props.add
  });

  return (
    <button
      className={buttonClass}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );

}

