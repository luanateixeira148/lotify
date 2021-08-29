import React from 'react'; //optional
import "./styles.scss";
const classNames = require('classnames');

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