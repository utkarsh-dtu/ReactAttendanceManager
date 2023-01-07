import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../style.css";

function AddStudent() {
  const [name, setName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [time, setTime] = useState("");
  const dispatch = useDispatch();
  const { count, StudentExistsError, studentList } = useSelector(
    (state) => state.student
  );

  useEffect(() => {
    if (StudentExistsError === true) {
      alert("Student already exists");
      dispatch({ type: "clearErrors" });
    }
  }, [StudentExistsError, dispatch]);

  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleRollNumberChange = (e) => {
    e.preventDefault();
    setRollNumber(e.target.value);
  };
  const handleTimeChange = (e) => {
    e.preventDefault();
    setTime(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (let i = 0; i < studentList.length; i++) {
      if (
        studentList[i].rollNumber === rollNumber &&
        studentList[i].checkedOut === false
      ) {
        await dispatch({ type: "studentExists" });
        return;
      }
    }

    dispatch({
      type: "addStudent",
      payload: {
        name: name,
        rollNumber: rollNumber,
        checkInTime: time,
        checkedOut: false,
        checkoutTime: "",
      },
    });
  };

  return (
    <>
      <form className="myForm">
        {/* <div className="cont"> */}
        <input
          type="text"
          required
          placeholder="enter name"
          className="inputContainer"
          onChange={handleNameChange}
        ></input>
        <input
          type="text"
          required
          placeholder="roll number"
          className="inputContainer"
          onChange={handleRollNumberChange}
        ></input>
        <input
          type="time"
          required
          className="timeButton"
          placeholder="checkin time"
          onChange={handleTimeChange}
        ></input>

        <button type="submit" className="submitButton" onClick={handleSubmit}>
          Add student
        </button>
        <div className="rightBar">
          {" "}
          Number of students in school currently : {count}
        </div>
        {/* </div> */}
      </form>
    </>
  );
}

export default AddStudent;
