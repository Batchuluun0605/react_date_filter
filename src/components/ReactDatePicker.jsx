import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Make sure to import the CSS
import { FaCalendarAlt } from "react-icons/fa"; // Import the calendar icon from react-icons

const product_data = [
  {
    productId: "12",
    productName: "ProductA",
    productPrice: "1562",
    date: "2024-12-24",
    TotalProduct: 294,
  },
  {
    productId: "13",
    productName: "ProductB",
    productPrice: "8545",
    TotalProduct: 294,
    date: "2025-01-22",
  },
  {
    productId: "14",
    productName: "ProductC",
    productPrice: "8654",
    TotalProduct: 78,
    date: "2025-01-23",
  },
  {
    productId: "15",
    productName: "ProductD",
    productPrice: "87456",
    TotalProduct: 878,
    date: "2025-02-01",
  },
];

const resetTimeToMidnight = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const DateInput = () => {
  const [startDate, setStartDate] = useState(resetTimeToMidnight(new Date()));
  const [endDate, setEndDate] = useState(resetTimeToMidnight(new Date()));
  const [isStartDateOpen, setIsStartDateOpen] = useState(false);
  const [isEndDateOpen, setIsEndDateOpen] = useState(false);

  const handleFilter = () => {
    console.log(startDate, "startdate");
    console.log(endDate, "enddate");
  };

  const filterProductData = product_data.filter((item) => {
    if (startDate && endDate) {
      return item.date > startDate && item.date < endDate;
    } else {
      return item;
    }
  });

  console.log(filterProductData);

  const formatDate = (date) => {
    if (!date) return "";
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getUTCDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleStartDateChange = (date) => {
    setStartDate(formatDate(date));
    setIsStartDateOpen(false);
  };

  const handleEndDateChange = (date) => {
    setEndDate(formatDate(date));
    setIsEndDateOpen(false);
  };

  return (
    <div className="data-filter-container">
      <div className="input-wrapper">
        <div className="date-picker-input">
          <DatePicker
            selected={startDate}
            onChange={(date) => handleStartDateChange(date)}
            dateFormat="yyyy-MM-dd"
            open={isStartDateOpen}
            onClickOutside={() => setIsStartDateOpen(false)}
            onInputClick={() => setIsStartDateOpen(false)}
            className="react-datepicker__input-container"
            readOnly
          />

          <FaCalendarAlt
            size={30}
            color="#ccc"
            onClick={() => setIsStartDateOpen((prev) => !prev)}
          />
        </div>
        <div style={{ fontSize: "30px" }}>-</div>
        <div className="date-picker-input">
          <DatePicker
            selected={endDate}
            onChange={(date) => handleEndDateChange(date)}
            dateFormat="yyyy-MM-dd"
            open={isEndDateOpen}
            onClickOutside={() => setIsEndDateOpen(false)}
            className="react-datepicker__input-container"
          />
          <FaCalendarAlt
            size={30}
            color="#ccc"
            onClick={() => setIsEndDateOpen((prev) => !prev)}
          />
        </div>
      </div>
      <button
        onClick={handleFilter}
        style={{ display: "flex", justifyContent: "center" }}
      >
        Filter
      </button>
      {filterProductData.map((item) => (
        <div key={item.productId}>{item.productId}</div>
      ))}
    </div>
  );
};

export default DateInput;
