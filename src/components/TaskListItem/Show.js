import React from 'react'; //optional
import "./styles.scss";
const classNames = require('classnames');

export default function Show(props) {

  return (
    <div className="show">
      <form>
          <input type="checkbox" id="task-checkbox" />
          <label class="container" for="task-checkbox">One</label>
      </form>
      <img
        className="appointment__status-image"
        src="images/shoppers.png"
        alt="Loading"
      />
    </div>
  );

}