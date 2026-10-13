import { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = () => {
    const h = height / 100;
    setBmi((weight / (h * h)).toFixed(2));
  };

  return (
    <div>
      <h1>BMI Calculator</h1>

      <input
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <input
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <button onClick={calculateBMI}>Calculate</button>

      <h2>BMI: {bmi}</h2>
    </div>
  );
}

export default App;