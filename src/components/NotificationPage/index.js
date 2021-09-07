import React from 'react';
import HomePage from './HomePage';
import Popup from './Popup';

export default function NotificationPage (props) {
  return (
    <>
      <Popup onClick={props.onClick} />
      <HomePage />
    </>
  )
}