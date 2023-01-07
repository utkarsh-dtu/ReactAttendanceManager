import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function Sample() {
  const dispatch = useDispatch();
  const [localCheckoutTime, setLocalCheckoutTime] = useState("");
  const { studentList } = useSelector((state) => state.student);

  useEffect(() => {}, [studentList]);

  return (
    <>
      {studentList.map((student) => {
        return (
          <div className="wrapper">
            <div className="inputContainer">name : {student.name}</div>
            <div className="inputContainer">
              roll number : {student.rollNumber}
            </div>
            <div className="inputContainer">
              checkInTime : {student.checkInTime}
            </div>
            {student.checkedOut && (
              <div> checkout time : {student.checkoutTime}</div>
            )}

            {!student.checkedOut && (
              <div>
                checkout time :{" "}
                <input
                  type="time"
                  required
                  onChange={(e) => {
                    e.preventDefault();
                    setLocalCheckoutTime(e.target.value);
                  }}
                ></input>
                <button
                  className="checkoutButton"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch({
                      type: "checkoutStudent",
                      payload: {
                        rollNumber: student.rollNumber,
                        checkoutTime: localCheckoutTime,
                        checkinTime: student.checkinTime,
                      },
                    });
                  }}
                >
                  {" "}
                  checkout{" "}
                </button>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}

export default Sample;
