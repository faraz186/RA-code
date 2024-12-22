import React from "react";
import styles from "./Card.module.css";
import PropTypes from "prop-types";

const Card = ({ id, imgSrc, title, desc }) => {
  return (
    <div className={styles.divContainer}>
      <img className={styles.img} src={imgSrc} alt="" />
      <h2>ID: {id}</h2>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default Card;
