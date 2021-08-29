import React from 'react';
import "./Button.scss";

/* import icons from fonts awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const classNames = require('classnames');

/* Icons */
const addIcon = <FontAwesomeIcon icon={faPlus} />
const deleteIcon = <FontAwesomeIcon icon={faTrash} />
const editIcon = <FontAwesomeIcon icon={faPen} />
const saveIcon = <FontAwesomeIcon icon={faCheck} />


export default function Button(props) {
  
  const includesIcon = function() {
    let icon;
    if (props.add) {
      icon = addIcon;
    }
    if (props.delete) {
      icon = deleteIcon;
    }
    if (props.edit) {
      icon = editIcon;
    }
    if (props.save) {
      icon = saveIcon;
    }
    return icon
  }

  const buttonClass = classNames("button", {
    "button--add": props.add,
    "button--delete": props.delete,
    "button--edit": props.edit,
    "button--save": props.save
  });

  return (

    <button
      className={buttonClass}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {includesIcon()}
    </button>
  );

}