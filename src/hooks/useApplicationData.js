import { useEffect, useState } from "react";
import axios from "axios";

export default function useApplicationData() {

  const [tasks, setTasks] = useState([]);
  const [bestRoute, setBestRoute] = useState([]);

  /* makes initial axios get request and sets tasks */
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/tasks")
      .then(res => {
        setTasks(res.data);
      })
  }, []);

  /* makes axios get request to set Google Maps URL with the 3 first tasks on the list. Data to be used on the Best Route button */

  /* Known bug: Best Route does not filter between checked or unchecked tasks. It will take the closest no matter if status is true or false. Should this be fixed on the backend? */
  useEffect(() => {
    axios.get("http://localhost:8080/api/bestroute")
    .then(res => { 
      setBestRoute(res.data);
    })
  }, [tasks])

  return { 
    tasks, setTasks,
    bestRoute
  }

}