import React, { useState } from 'react';
import axios from 'axios';
import "./styles.scss";
import Button from '../Button';
import Dropdown from './Dropdown';
import Select from 'react-select';
const classNames = require('classnames');


export default function Form(props) {

  const options = [
    { value: 1, label: 'Shoppers Drug Mart' },
    { value: 2, label: 'H-Mart Downtown' },
    { value: 3, label: 'Breka Bakery & Café (Davie)' },
  ];

  const [description, setDescription] = useState();
  const [location, setLocation] = useState();
  const [selectedOption, setSelectedOption] = useState(null);
  console.log('LOCATION......', location)
  console.log('SELECTED OPTION', selectedOption)

  const addTask = () => {
    axios
      .post(`http://localhost:8080/api/tasks`,
        {'description': description,
         'location_id':  selectedOption.value})
      .then((res) => {
        props.setLoading(true);
        props.setFormState('hide');
      })
      .catch((err) => console.log(err))
  }

  if (props.formState === 'show') {
    return (
      <div className="form">
        <form>
          <input 
            className="description"
            name="description" 
            type="text" 
            placeholder="Add description"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
              console.log(event.target.value);
            }}
          />
          <div className="dropdown">
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
            />
          </div>
          {/* <input 
            className="location" 
            name="location"
            type="text" 
            placeholder="Add location"
            value={location}
            onChange={(event) => {
              setLocation(event.target.value);
              console.log(event.target.value);
            }}
          /> */}
        </form>
        <Button save onClick={() => addTask()} />
      </div>
    );
    } else {
      return null
    }

}