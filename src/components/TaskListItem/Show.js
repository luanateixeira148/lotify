import React from 'react';
import "./styles.scss";
import Button from "../Button";
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

/* Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Show(props) {
  const deleteTask = (id) => {
    console.log('delete button was clicked');
    props.setEdit('deleted')
    return axios
      .delete(`http://localhost:8080/api/tasks/${id}`)
  }

  console.log('-----', props)

  return (
    <Swiper className="show"
      spaceBetween={0}
      slidesPerView={1}
      slidesOffsetAfter={-250}
    >
      <SwiperSlide>
        <div className="info-container">
          <form className="input-container">
            <input type='checkbox' id='task-checkbox' checked={props.status} onChange={() => props.toggleCheckbox(props.id)} />
            <span className="styled-checkbox">
              <FontAwesomeIcon icon={faCheck} />
            </span>
          </form>
          <div className="location-info">
            <label>{props.description}</label>
            <hr />
            <h4>{props.name}</h4>
          </div>
          <div className="distance-info">
            <h3>{props.distance}km</h3>
            <a href={props.map_url} > 
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="button-container">
          <Button edit onClick={() => props.setEdit('edit')} />
          <Button delete onClick={() => deleteTask(props.id)} />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}