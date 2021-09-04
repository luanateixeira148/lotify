import React, { useState } from 'react';
import Show from './Show';
import FormOnEdit from './FormOnEdit';

export default function TaskListItem(props) {
  const {task, toggleCheckbox} = props;
  const [edit, setEdit] = useState('show');

  if (edit === 'show') {
    return <Show
    key={task.id}
    id={task.id}
    status={task.status}
    description={task.description}
    logo_url={task.logo_url}
    toggleCheckbox={toggleCheckbox}
    setEdit={setEdit}
    distance={task.distance}
    map_url={task.map_url}
    name={task.name}
    address={task.address}
  />
  } 
  else if (edit === 'edit') {
    return <FormOnEdit 
      setEdit={setEdit}
      description={task.description}
      location={task.name}
      id={task.id}
      setLoading={props.setLoading}
    />
  } 
  else {
    return null;
  }
}