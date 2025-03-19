import React, { useState } from 'react';
import './DigitConverter.css';

const DigiConverter = () => {
    const [data, setData] = useState('');
    const [dataBase, setDataBase] = useState('10'); 
    const [outputBase, setOutputBase] = useState('2'); 
    const [output, setOutput] = useState('');

    const convertBase = (value, fromBase, toBase) => {
        if (!value) return '';
        try {
            return parseInt(value, fromBase).toString(toBase).toUpperCase();
        } catch (error) {
            return 'Invalid Input';
        }
    };

    const handleChange = (e) => {
        const value = e.target.value.toUpperCase(); // Ensures hexadecimal input is valid
        setData(value);
        
        const fromBase = parseInt(dataBase, 10);
        const toBase = parseInt(outputBase, 10);

        if (isNaN(fromBase) || isNaN(toBase)) {
            setOutput('Invalid Base');
        } else {
            setOutput(convertBase(value, fromBase, toBase));
        }
    };

    return (
        <div className='body_DC'>
            <div className="converter">
                <h1 className='h1'>Number Base Converter</h1>
                <div className="data-box">
                    <label className='label_DC'>Select Input Base:</label>
                    <select className='select' value={dataBase} onChange={(e) => setDataBase(e.target.value)}>
                        <option value="2">Binary</option>
                        <option value="8">Octal</option>
                        <option value="10">Decimal</option>
                        <option value="16">Hexadecimal</option>
                    </select>
                </div>

                <div className="output-box">
                    <label className='label_DC'>Select Output Base:</label>
                    <select className='select' value={outputBase} onChange={(e) => setOutputBase(e.target.value)}>
                        <option value="2">Binary</option>
                        <option value="8">Octal</option>
                        <option value="10">Decimal</option>
                        <option value="16">Hexadecimal</option>
                    </select>
                    
                    <label className='label_DC'>Enter Number:</label>
                    <input 
                        className='input' 
                        type="text" 
                        value={data} 
                        onChange={handleChange} 
                        placeholder="Enter number"
                    />

                    <div className="output">
                        <label className='label_DC'>Converted Output:</label>
                        <p>{output}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigiConverter;
