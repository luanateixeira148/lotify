import React from 'react';
import "./styles.scss";
import Button from "../Button";
const classNames = require('classnames');

export default function Show(props) {

  return (
    <div className='checked'>
      <form>
          <input type='checkbox' id='task-checkbox' checked/>
          <label for="task-checkbox">
            {props.description}
          </label>
      </form>
      <img
        src={props.logo_url}
      />
      <Button edit />
      <Button delete />
    </div>
  );

}