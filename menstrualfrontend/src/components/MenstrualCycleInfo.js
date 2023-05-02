import React, { useState } from 'react';
import './PeriodInfo.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import format from 'date-fns/format';


const MenstrualCycleInfo = ({result}) => {
    const [selectedDate, setSeletedDate] = useState(new Date());
    const nextPeriodDate = result.nextPeriod;
    const ovulationDate = result.ovulationDate;
    const fertileWindows = result.fertileWindows;

    const handleDateChange = (date) => {
        setSeletedDate(date);
    };

    const tileContent = ({ date, view }) => {
        if (view === 'month') {
            const formattedDate = format(date, 'yyyy-MM-dd');
            if (formattedDate === nextPeriodDate) {
                return <div className='period-date'>{nextPeriodDate} </div>;
            }

            if (formattedDate === ovulationDate) {
                return <div className='ovulation-date'>{ovulationDate} </div>;
            }
            if (fertileWindows && fertileWindows.includes(formattedDate)) {
                return <div className='fertile-date'>{formattedDate}</div>;
            }
            
        }
        return null;
    }


    return (
        <div className='result'>
            <h3>Menstrual Cycle Information</h3>
            {/* <div>Next Period Date: <span className='next-period'>{ nextPeriodDate }</span></div>
            <div>Ovulation Date: <span className='ovulation-date'>{ ovulationDate }</span></div> */}
            {/* <div>Fertile Windows Date: <span className='fertile-windows'>[{fertileWindows + " "}]</span></div> */}
            <Calendar
                value={selectedDate}
                tileContent={tileContent}
                onChange={handleDateChange}
            />
        </div>
        
    );
};


export default MenstrualCycleInfo;