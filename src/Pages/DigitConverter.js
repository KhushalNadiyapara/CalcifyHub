import React, { useState } from 'react';
import './DigitConverter.css';

const DigiConverter = () => {
    const [data, setdata] = useState('');
    const [dataBase, setdataBase] = useState('10'); 
    const [outputBase, setOutputBase] = useState('2'); 
    const [output, setOutput] = useState('');

    const convertBase = (value, fromBase, toBase) => {
        return parseInt(value, fromBase).toString(toBase);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setdata(value);
        try {
            setOutput(convertBase(value, parseInt(dataBase), parseInt(outputBase)));
        } catch (error) {
            setOutput('Invalid Input');
        }
    };

    return (
        <body className='body_DC'>
            <div className="converter">
                <h1 className='h1'>Number Base Converter</h1>
                <div className="data-box">
                   

                    <label className='label_DC'>Select Input Base:</label>
                    <select className='select' value={dataBase} onChange={(e) => setdataBase(e.target.value)}>
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
                    <data className='data' type="text" value={data} onChange={handleChange} />

                    <div className="output">
                        <label className='label_DC'>Converted Output:</label>
                        <p>{output}</p>
                    </div>
                </div>
            </div>
        </body>
    );
};

export default DigiConverter;
