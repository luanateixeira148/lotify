import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 1, label: 'Shoppers Drug Mart' },
  { value: 2, label: 'H-Mart Downtown' },
  { value: 3, label: 'Breka Bakery & Café (Davie)' },
];

// THIS COMPONENT IS NOT BEING USED, IT IS JUST FOR REFERENCE ON HOW TO IMPLEMENT THE SELECT COMPONENT

export default function Dropdown() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (

    <div className="dropdown">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}
