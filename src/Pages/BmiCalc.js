import React, { useState } from 'react';
import './BmiCalc.css';

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      let bmiMessage = '';
      if (bmiValue < 18.5) {
        bmiMessage = 'Underweight';
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        bmiMessage = 'Normal weight';
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        bmiMessage = 'Overweight';
      } else {
        bmiMessage = 'Obesity';
      }
      setMessage(bmiMessage);
    }
  };

  return (
    <body className='body_BMI'>
    <div className="bmi-calculator">
      <h1>BMI Calculator</h1>
      <div className="input-group">
        <label>Weight (kg)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Height (cm)</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button className='button_bmi' onClick={calculateBMI}>Calculate BMI</button>
      {bmi && (
        <div className="result">
          <h2>Your BMI: {bmi}</h2>
          <p>{message}</p>
        </div>
      )}
    </div>
    </body>
  );
}

export default BMICalculator;
