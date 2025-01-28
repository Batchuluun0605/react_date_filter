import DateFilter from "./DateFilter";
import DateInput from "./ReactDatePicker";

const date = () => {
  return (
    <div>
      <div>
        <DateFilter />
        <div
          style={{
            width: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px auto",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#f4f4f9",
            padding: "20px",
          }}
        >
          <DateInput />
        </div>
      </div>
    </div>
  );
};

export default date;
