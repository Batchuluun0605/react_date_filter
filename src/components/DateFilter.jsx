import React, { useRef, useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";

const resetTimeToMidnight = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
const DateFilter = ({ data }) => {
  const [startDate, setStartDate] = useState(resetTimeToMidnight(new Date()));
  const [today, setToday] = useState(new Date());
  const [endDate, setEndDate] = useState(resetTimeToMidnight(new Date()));

  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);

  const handleFilter = () => {
    console.log(startDate, "startdat");
    console.log(endDate, "enddate");
  };

  console.log(today);

  const handleIconClick = (inputRef) => {
    if (inputRef.current) {
      inputRef.current.showPicker();
    } else {
      inputRef.current.showPicker();
    }
  };

  return (
    <div className="date-filter-container">
      <div className="date-picker-container">
        <div className="input-wrapper">
          <input
            ref={firstInputRef}
            type="date"
            value={startDate}
            min={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            style={{ maxWidth: "120px" }}
            placeholder={startDate}
          />
          <span className="" onClick={() => handleIconClick(firstInputRef)}>
            <AiOutlineCalendar size={25} color="#ccc" />
          </span>
        </div>
        <div className="separate">-</div>
        <div className="input-wrapper">
          <input
            ref={secondInputRef}
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            style={{ maxWidth: "120px" }}
          />
          <span className="" onClick={() => handleIconClick(secondInputRef)}>
            <AiOutlineCalendar size={25} color="#ccc" />
          </span>
        </div>
      </div>

      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default DateFilter;
