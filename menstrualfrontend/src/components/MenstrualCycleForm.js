import React, { useState } from 'react';
import './PeriodForm.css';
import axios from 'axios';
import MenstrualCycleInfo from './MenstrualCycleInfo';

const MenstrualCycleForm = () => {
    const [startDate, setStartDate] = useState('')
    const [cycleLength, setCycleLength] = useState('')
    const [result, setResult] = useState('')
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        const data = {
            periodStartDate: startDate,
            cycleLength: cycleLength,
        };
        axios.post('http://localhost:8080/api/v1/cycle/cycleinfo', data)
            .then(response => {
                console.log(response.data);
                setResult(response.data);
            })

            .catch(error => {
                console.log(error);
            });
    
    };

    return (
        <div>
            <form className='period-form' onSubmit={handleFormSubmit}>
                <label htmlFor="startDate">Date of first period:</label>
                <input
                    type="date"
                    id="startDate"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required />
                
                <label htmlFor="cycleLength"> length of days before next period:</label>
                <input
                    type="number"
                    id="cycleLength"
                    value={cycleLength}
                    onChange={(e) => setCycleLength(e.target.value)}
                    required />
                <button type="submit">Submit</button>
            </form>
                <MenstrualCycleInfo results={result}/>
        </div>
    );
};


export default MenstrualCycleForm;