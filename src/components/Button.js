import React from 'react';
import "./Button.scss";

/* import icons from fonts awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faDirections } from '@fortawesome/free-solid-svg-icons';

const classNames = require('classnames');

export default function Button(props) {
  
  const includeIcon = function() {
    let icon;
    if (props.add) {
      icon = <FontAwesomeIcon icon={faPlusCircle} />;
    }
    if (props.delete) {
      icon = <FontAwesomeIcon icon={faTrash} />;
    }
    if (props.edit) {
      icon = <FontAwesomeIcon icon={faPen} />;
    }
    if (props.save) {
      icon = <FontAwesomeIcon icon={faCheck} />;
    }
    if (props.directions) {
      icon = <FontAwesomeIcon icon={faDirections} />;
    }
    return icon
  }

  const buttonClass = classNames("button", {
    "button--add": props.add,
    "button--delete": props.delete,
    "button--edit": props.edit,
    "button--save": props.save,
    "button--directions": props.directions
  });

  return (
    <button
      className={buttonClass}
      onClick={props.onClick}
    >
      {includeIcon()}
    </button>
  );
}