import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./styles.scss";
// import homeScreen from './homescreen.png';

const classNames = require('classnames');

export default function HomePage (props) {

  return (
    <div className="home-page">
      <img src="images/homescreen.png" alt="" />
    </div>
  )

}