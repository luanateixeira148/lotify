import React from 'react';
import "./styles.scss";
const classNames = require('classnames');

// THIS FILE IS NOT BEING UPDATED. THE CHANGES ARE BEING MADE BASED ON THE STATE OF THE SHOW COMPONENT.

export default function Checked(props) {

  return (
    <div className="checked">
      <form>
          <input type="checkbox" id="task-checkbox" checked/>
          <label for="task-checkbox">Pickup prescription</label>
      </form>
      <img
        src="images/shoppers.png"
      />
    </div>
  );

}