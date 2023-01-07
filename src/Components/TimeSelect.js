import "rc-time-picker/assets/index.css";
import React, { useState } from "react";
import moment from "moment";
import TimePicker from "rc-time-picker";

const showSecond = true;
const str = showSecond ? "HH:mm:ss" : "HH:mm";

function TimeSelect() {
  function onChange(value) {
    console.log(value && value.format(str));
    const time = toString(value);
    console.log(typeof time);
    setTime(value);
  }

  const [time, setTime] = useState("");
  return (
    <>
      <TimePicker
        style={{ width: 100 }}
        showSecond={showSecond}
        defaultValue={moment()}
        className="xxx"
        onChange={onChange}
      />
      <button
        onClick={() => {
          const timeStr = time.toString().split(" ")[4];
          alert(`time ho riya hai ${timeStr}`);
        }}
      >
        {" "}
        Enter time
      </button>
    </>
  );
}

export default TimeSelect;
