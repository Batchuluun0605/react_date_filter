import React, { useRef, useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";

const DateFilter = ({ data }) => {
  const [startDate, setStartDate] = useState("");
  const [today, setToday] = useState(new Date());
  const [endDate, setEndDate] = useState("");
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
            onChange={(e) => setStartDate(e.target.value)}
            style={{ maxWidth: "120px" }}
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
