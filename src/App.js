import Content from "./components/Content.jsx";

function App() {
  return (
    <div>
      date filter to react
      <div>
        <Content />
        <input
          type="date"
          id="start"
          name="trip-start"
          value="2018-07-22"
          min="2018-01-01"
          max="2018-12-31"
        />
      </div>
    </div>
  );
}

export default App;
