import React from 'react'; //optional
import "./styles.scss";
const classNames = require('classnames');

export default function Show(props) {

  return (
    <div className="show">
      <form>
          <input type="checkbox" id="task-checkbox" />
          <label for="task-checkbox">Pickup prescription</label>
      </form>
      <img
        src="images/shoppers.png"
      />
    </div>
  );

}