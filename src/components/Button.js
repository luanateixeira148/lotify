import React from 'react';
import "./Button.scss";
/* Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const classNames = require('classnames');

/* Icons */
const editIcon = <FontAwesomeIcon icon={faPen} />
const deleteIcon = <FontAwesomeIcon icon={faTrash} />
const addIcon = <FontAwesomeIcon icon={faPlus} />
const saveIcon = <FontAwesomeIcon icon={faCheck} />


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
      {deleteIcon}
    </button>
  );

}