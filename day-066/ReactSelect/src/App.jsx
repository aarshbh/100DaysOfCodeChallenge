import { useState } from "react";
import Select from "react-select";

const options = [
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "javascript", label: "JavaScript" },
  { value: "react", label: "React" },
  { value: "typescript", label: "TypeScript" },
  { value: "tailwindcss", label: "TailwindCss" },
];

const customStyles = {
  control: (provided) => ({
    ...provided,

    width: "400px",
    borderRadius: "8px",
    boxShadow: "none",
    textAlign: "center",
    backgroundColor: "lightgrey",
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "black" : "grey",
    backgroundColor: state.isSelected ? "lightgrey" : "white",
  }),
};

function App() {
  const [optionPicked, setOptionPicked] = useState([]);

  return (
    <div className="App flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 rounded-lg">
      <h1 className="mt-10 text-3xl">React-Select Library</h1>
      <Select
        options={options}
        className="mt-5 w-96"
        styles={customStyles}
        isMulti
        onChange={(option) => setOptionPicked(option)}
      />

      <h1 className="mt-4">
        Option picked by User:{" "}
        <span className="text-lg">
          {optionPicked.map((opt) => opt.label).join(", ")}
        </span>
      </h1>
    </div>
  );
}

export default App;
