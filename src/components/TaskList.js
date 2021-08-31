import React, { useEffect, useState } from 'react';
import "./TaskList.scss";
import Show from './TaskListItem/Show';
import Checked from './TaskListItem/Checked';
import axios from 'axios';

const classNames = require('classnames');

// const tasks = [
//   {
//     id: 1,
//     description: "Return Dress",
//     status: false,
//     location_id: 6,
//     device_id: 6,
//     latitude: 49.22720599357389,
//     longitude: -123.0034522066196,
//     name: "Best Buy Station Square",
//     address: "Station Square, 6200 McKay Ave Unit 200, Burnaby, BC V5H 4L7",
//     logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Best_Buy_Logo.svg/1280px-Best_Buy_Logo.svg.png"
//   },
//   {
//     id: 2,
//     description: "Buy eye drops",
//     status: true,
//     location_id: 4,
//     device_id: 4,
//     latitude: 49.28334159584531,
//     longitude: -123.11836841961,
//     name: "CF Pacific Center",
//     address: "701 W Georgia St, Vancouver, BC V7Y 1G5",
//     logo_url: "https://images.wirkn.com/w04HAIbNSlGDVcdfI3U4_pa.jpg"
//   },
//   {
//     id: 3,
//     description: "Buy bluelight screen filter",
//     status: false,
//     location_id: 4,
//     device_id: 4,
//     latitude: 49.28334159584531,
//     longitude: -123.11836841961,
//     name: "Dollarama Station Square",
//     address: "Station Square, 6200 McKay Ave, Burnaby, BC V5H 4L7",
//     logo_url: "https://jobapplications.net/wp-content/uploads/dollarama-logo.png"
//   },
//   {
//     id: 4,
//     description: "pickup birthday cake",
//     status: true,
//     location_id: 4,
//     device_id: 4,
//     latitude: 49.28334159584531,
//     longitude: -123.11836841961,
//     name: "Walmart Supercenter",
//     address: "610 6th St, New Westminster, BC V3L 3C2",
//     logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/2560px-Walmart_logo.svg.png"
//   }
// ];

export default function TaskList(props) {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:8080/api/tasks")
    .then(res => { setTasks(res.data) })

  }, [])

  const updateStatus = function (taskId) {
    // get the day object
    const taskObj = tasks.find(task => task.id === taskId)
    //initialize the num spots to zerio
    let status;
    // if an interview does not exist, increase the number of spots remainin
    (taskObj.status === false) ? taskObj.status = true : taskObj.status = false
    
    return axios.put('http://localhost:8080/api/tasks/' + taskId, taskObj)
    .then((res) => {
      console.log(res);
      // const days = updateSpots(state.day, state.days, taskOb);
      // setState({...state, appointments, days});
    }) 
  };

  const handleClick = () => {
    console.log('Show component was clicked.');
  }

  const toggleCheckbox = (id) => {
    let taskFromStates = tasks
    for (let i = 0; i < taskFromStates.length; i++) {
      const taskObj = taskFromStates[i];
      if (taskObj.id === id) {
        taskFromStates[i].status = !taskFromStates[i].status 
      }
    }
    setTasks([...taskFromStates])
  }

  const getCheckedTasks = () => {
    return tasks.filter(task => task.status === true)
  }

  const getUncheckedTasks = () => {
    return tasks.filter(task => task.status === false)
  }

  return (
    <div className="taskList">
      {/* maps over tasks and returns only unchecked ones */}
      <ul>
        {getUncheckedTasks().map((task, index) => (
          <Show
            key={task.id}
            id={task.id}
            index={index}
            status={task.status}
            description={task.description}
            logo_url={task.logo_url}
            toggleCheckbox={toggleCheckbox}
          />
        ))}
      </ul>

      {/* maps over tasks and returns only checked ones */}
      <ul>
        {getCheckedTasks().map(task => (
          <Checked
            status={task.status}
            description={task.description}
            logo_url={task.logo_url}
          />
        ))}
      </ul>
    </div>

  );

}