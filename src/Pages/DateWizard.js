import React, { useState } from 'react';
import './DateWizard.css';

const DateWizard = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [daysToAdd, setDaysToAdd] = useState(0);
  const [resultDate, setResultDate] = useState(null);
  const [dateDifference, setDateDifference] = useState(null);
  const [dayOfWeek, setDayOfWeek] = useState('');

  const calculateDifference = () => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDateDifference(diffDays);
    }
  };

  const addDays = () => {
    if (startDate) {
      const start = new Date(startDate);
      const result = new Date(start);
      result.setDate(result.getDate() + parseInt(daysToAdd));
      setResultDate(result.toISOString().split('T')[0]);
    }
  };

  const findDayOfWeek = () => {
    if (resultDate) { // Use resultDate instead of startDate
        const [year, month, day] = resultDate.split('-').map(Number);
        const date = new Date(year, month - 1, day); // Correctly parse date
        const options = { weekday: 'long' };
        setDayOfWeek(date.toLocaleDateString('en-US', options));
    }
};


  return (
    <div className="datewizard-container">
      <div className="datewizard-box">
        <div className="box">
          <div className="input-group">
            <label>Start Date:</label>
            <input 
              type="date" 
              value={startDate} 
              onChange={(e) => setStartDate(e.target.value)} 
            />
          </div>

          <div className="input-group">
            <label>End Date:</label>
            <input 
              type="date" 
              value={endDate} 
              onChange={(e) => setEndDate(e.target.value)} 
            />
          </div>
          <button className="btn" onClick={calculateDifference}>Calculate Difference</button>
          {dateDifference && <p>Difference: {dateDifference} days</p>}
        </div>

        <div className="box">
          <div className="input-group">
            <label>Days to Add/Subtract:</label>
            <input 
              type="number" 
              value={daysToAdd} 
              onChange={(e) => setDaysToAdd(e.target.value)} 
            />
          </div>
          <button className="btn" onClick={addDays}>Add Days</button>
          {resultDate && <p>Resulting Date: {resultDate}</p>}

          <button className="btn" onClick={findDayOfWeek}>Find Day of the Week</button>
          {dayOfWeek && <p>Day of the Week: {dayOfWeek}</p>}
        </div>
      </div>
    </div>
  );
};

export default DateWizard;
