import React, { useEffect, useState } from 'react';
import Show from './Show';
import Checked from './Checked';
import FormOnEdit from './FormOnEdit';
import axios from 'axios';


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