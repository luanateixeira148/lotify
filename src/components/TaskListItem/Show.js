import React from 'react';
import "./styles.scss";
import Button from "../Button";
const classNames = require('classnames');

export default function Show(props) {

  // defines if the task status is true or false, and return show or checked.
  //show and checked are the className used to define the css
  const defineTaskClass = function(propsStatus) {
    let status;
    if (propsStatus === false) {
      status = "show";
    }
    if (propsStatus === true) {
      status = "checked";
    }
    return status;
  }

  // defines if the task status. If true, returns the checked input. If false, returns unchecked input
  const defineTaskStatus = function(propsStatus) {
    let status;
    if (propsStatus === false) {
      status = <input type='checkbox' id='task-checkbox' />;
    }
    if (propsStatus === true) {
      status = <input type='checkbox' id='task-checkbox' checked/>;
    }
    return status;
  }

  return (
    <div className={defineTaskClass(props.status)}>
      <form>
          {defineTaskStatus(props.status)}
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