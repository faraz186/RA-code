import React from "react";
import styles from "./Student.module.css";

const Student = ({ stdName = "Guest", stdAge = 0, isStudent = false }) => {
  return (
    <>
      <h1 className={styles.heading}>Student Page</h1>
      <p className={styles.para}>Lorem ipsum dolor sit amet.</p>
    </>
    // <div className={styles.stdDiv}>
    //   <h1>Student Name: {stdName}</h1>
    //   <h3>Student Age: {stdAge}</h3>
    //   <h5>Student status: {isStudent ? "True" : "False"}</h5>
    // </div>
  );
};

export default Student;
