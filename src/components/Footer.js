import React from 'react';
import Button from './Button';

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