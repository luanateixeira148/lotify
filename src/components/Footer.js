import React, { useState } from 'react';
import axios from 'axios';
import Button from './Button';
const classNames = require('classnames');

export default function Footer(props) {

  const toggleForm = () => {
    props.formState === 'hide' ? props.setFormState('show') : props.setFormState('hide');
  }

  return (
    <Button 
      add 
      onClick={() => toggleForm()} 
    />
  )
}