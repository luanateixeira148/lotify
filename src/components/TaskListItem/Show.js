import React from 'react';
import "./styles.scss";
const classNames = require('classnames');

const tempData = [
  {
    id: 1,
    description: "Return Dress",
    status: false,
    location_id: 6,
    device_id: 6,
    latitude: 49.22720599357389,
    longitude: -123.0034522066196,
    name: "Best Buy Station Square",
    address: "Station Square, 6200 McKay Ave Unit 200, Burnaby, BC V5H 4L7",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Best_Buy_Logo.svg/1280px-Best_Buy_Logo.svg.png"
  }
]

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
    </div>
  );

}