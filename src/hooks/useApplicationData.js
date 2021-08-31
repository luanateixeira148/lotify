// //import React hooks and axios
// import { useState, useEffect } from "react";
// import axios from 'axios';


// export default function ApplicationData(props) {

//   const [state, setState] = useState({
//     day: "Monday",
//     days: [],
//     appointments: {},
//     interviewers: {}
//   });

//   // spread operator replaces the day part within state
//   const setDay = function(day) {
//     setState({...state, day})
//   };

//   // useEffect() runs once when application loads, and never again
//   useEffect(() => {
    
//     Promise.all([
//       axios.get('/api/days'),
//       axios.get('/api/appointments'),
//       axios.get('/api/interviewers')

//     ]).then((all) => {    
//       const days = all[0].data;
//       const appointments = all[1].data;
//       const interviewers = all[2].data;
//       setState(prev => ({...prev, days, appointments, interviewers }));
//       });
    
//   }, [])
    

//   const updateStatus = function (taskId) {
//     // get the day object
//     const taskObj = tasks.find(task => task.id === taskId)
//     //initialize the num spots to zerio
//     let status;
//     // if an interview does not exist, increase the number of spots remainin
//     (taskObj.status === 0) ? taskObj.status = 1 : taskObj.status = 0

//     return axios.put('http://localhost:8080/api/tasks/' + id, taskObj)
//     .then((res) => {
//       console.log(res);
//       // const days = updateSpots(state.day, state.days, taskOb);
//       // setState({...state, appointments, days});
//     }) 
//   };

    
//   function bookInterview(id, interview) {

//     const appointment = {
//       //appointments section of the state
//       ...state.appointments[id],
//       //whole interview object without the spread operator
//       interview
//     };

//     const appointments = {
//       //create a copy of all appointments in the state
//       ...state.appointments, 
//       //add a new appointment to the state appointments object
//       [id]: appointment 
//     };
  
//     //make an api call with the url with id appended, providing the appointment data
//     return axios.put('http://localhost:8001/api/appointments/' + id, appointment)
//       .then((res) => {
//         console.log(res);
//         const days = updateSpots(state.day, state.days, appointments);
//         setState({...state, appointments, days});
//       }) 
//       //should not use catch here. The catch phrase is used when the bookInterview is called within the Appointments component
//   }

  
//   function cancelInterview(id) {
    
//     const appointment = {
//       ...state.appointments[id],
//       interview: null
//     };

//     const appointments = {
//       ...state.appointments,
//       [id]: appointment
//     };
    
//     return axios.delete('http://localhost:8001/api/appointments/' + id)
//       .then((res) => {
//         console.log(res);
//         const days = updateSpots(state.day, state.days, appointments);
//         setState({...state, appointments, days});
//       }) 
//       //should not use catch here. The catch phrase is used when the cancelInterview is called within the Appointments component
//   }

//   // return {state, setDay, bookInterview, cancelInterview};
//   return {updateStatus};
// }


