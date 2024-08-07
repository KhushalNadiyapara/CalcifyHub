// import React, { useState, useEffect } from 'react';
// import './SimpleCalc.css';

// const SimpleCalculator = () => {
//   const [data, SetData] = useState('');

//   const handleClick = (value) => {
//     SetData(data + value);
//   };

//   const handleClear = () => {
//     SetData('');
//   };

//   const handleEqual = () => {
//     try {
//       const result = eval(data);
//       SetData(result.toLocaleString('en-US'));
//     } catch (error) {
//       SetData('0');
//     }
//   };

//   const handleDelete = () => {
//     SetData(data.slice(0, -1));
//   };

//   const handleKeyDown = (event) => {
//     const { key } = event;
//     if (
//       (key >= '0' && key <= '9') ||
//       key === '+' ||
//       key === '-' ||
//       key === '*' ||
//       key === '/' ||
//       key === '.' ||
//       key === '%'
//     ) {
//       handleClick(key);
//     } else if (key === 'Enter' || key === '=') {
//       handleEqual();
//     } else if (key === 'Backspace') {
//       handleDelete();
//     } else if (key === 'Escape') {
//       handleClear();
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('keydown', handleKeyDown);
//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [data]);

//   return (
//     <div className='body_SC'>
//       <div className="calculator">
//         <div className="display">{data}</div>
//         <div className="buttons">
//           <button onClick={handleClear}>AC</button>
//           <button onClick={handleDelete}>←</button>
//           <button onClick={() => handleClick('%')}>%</button>
//           <button onClick={() => handleClick('/')}>/</button>
//           <button onClick={() => handleClick('1')}>1</button>
//           <button onClick={() => handleClick('2')}>2</button>
//           <button onClick={() => handleClick('3')}>3</button>
//           <button onClick={() => handleClick('*')}>*</button>
//           <button onClick={() => handleClick('4')}>4</button>
//           <button onClick={() => handleClick('5')}>5</button>
//           <button onClick={() => handleClick('6')}>6</button>
//           <button onClick={() => handleClick('-')}>-</button>
//           <button onClick={() => handleClick('7')}>7</button>
//           <button onClick={() => handleClick('8')}>8</button>
//           <button onClick={() => handleClick('9')}>9</button>
//           <button onClick={() => handleClick('+')}>+</button>
//           <button onClick={() => handleClick('.')}>.</button>
//           <button className="zero" onClick={() => handleClick('0')}>0</button>
//           <button className="equal" onClick={handleEqual}>=</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SimpleCalculator;
import React, { useState, useEffect, useCallback } from 'react';
import { evaluate } from 'mathjs';
import './SimpleCalc.css';

const SimpleCalculator = () => {
  const [data, SetData] = useState('');

  const handleClick = (value) => {
    SetData(data + value);
  };

  const handleClear = () => {
    SetData('');
  };

  const handleEqual = () => {
    try {
      const result = evaluate(data);
      SetData(result.toLocaleString('en-US'));
    } catch (error) {
      SetData('0');
    }
  };

  const handleDelete = () => {
    SetData(data.slice(0, -1));
  };

  const handleKeyDown = useCallback((event) => {
    const { key } = event;
    if (
      (key >= '0' && key <= '9') ||
      key === '+' ||
      key === '-' ||
      key === '*' ||
      key === '/' ||
      key === '.' ||
      key === '%'
    ) {
      handleClick(key);
    } else if (key === 'Enter' || key === '=') {
      handleEqual();
    } else if (key === 'Backspace') {
      handleDelete();
    } else if (key === 'Escape') {
      handleClear();
    }
  }, [data, handleClick, handleEqual, handleDelete, handleClear]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className='body_SC'>
      <div className="calculator">
        <div className="display">{data}</div>
        <div className="buttons">
          <button onClick={handleClear}>AC</button>
          <button onClick={handleDelete}>←</button>
          <button onClick={() => handleClick('%')}>%</button>
          <button onClick={() => handleClick('/')}>/</button>
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('*')}>*</button>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('-')}>-</button>
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('+')}>+</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button className="zero" onClick={() => handleClick('0')}>0</button>
          <button className="equal" onClick={handleEqual}>=</button>
        </div>
      </div>
    </div>
  );
};

export default SimpleCalculator;
