import React from 'react';
// import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import PlayIcon from '../assets/static/play-icon.png';
import PlusIcon from '../assets/static/plus-icon.png';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => {
    return(
        <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt={title}  />
        <div className="carousel-item__details">
          <div>
            <img className="carousel-item__details--img" src={PlayIcon} alt="Play Icon" /> 
            <img className="carousel-item__details--img" src={PlusIcon} alt="Plus Icon" /> 
          </div>
          <p className="carousel-item__details--title">{title}</p>
          <p className="carousel-item__details--subtitle">
            {`${year} ${contentRating} ${duration}`}
          </p>
        </div>
      </div>
    );
}
/*
CarouselItem.PropTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  duration: PropTypes.number,
  contentRating: PropTypes.string,
}
*/
export default CarouselItem;