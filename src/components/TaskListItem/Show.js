import React, { useEffect, useState } from 'react';
import "./styles.scss";
import Button from "../Button";
import axios from 'axios';
const classNames = require('classnames');

export default function Show(props) {

  return (
    
    <div className="show">
      <form>
          <input type='checkbox' id='task-checkbox' />
          <label htmlFor="task-checkbox">
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