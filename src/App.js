import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect} from 'react';
import React from 'react';

import Button from "./components/Button"


function App() {

// useEffect(() => {
    

//   axios.get('/')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });
  
// }, [])

  return (
    <div className="App">
      <Button />
      <Button />

    </div>
  );
}

export default App;
