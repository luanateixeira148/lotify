import React from 'react';
import Button from './Button';
import "./Footer.scss";

export default function Footer(props) {
  const toggleForm = () => {
    props.formState === 'hide' ? props.setFormState('show') : props.setFormState('hide');
  }

  return (
    <div className="footer-container">
      <Button 
        add 
        onClick={() => toggleForm()} 
      />
    </div>
  )
}