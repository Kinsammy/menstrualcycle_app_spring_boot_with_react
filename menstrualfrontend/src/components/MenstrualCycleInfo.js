import React, { useState } from 'react';
import './PeriodInfo.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import format from 'date-fns/format';


const MenstrualCycleInfo = ({results}) => {
    const [selectedDate, setSeletedDate] = useState(new Date());
    const nextPeriodDate = results.nextPeriod;
    const ovulationDate = results.ovulationDate;
    const fertileWindows = results.fertileWindows;

    const handleDateChange = (date) => {
        setSeletedDate(date);
    };

    // const tileClassName = ({ date, view }) => {
    //     if (view === 'month') {
    //       const formattedDate = format(date, 'yyyy-MM-dd');
    //       const content = results.map(result => {
    //         if (formattedDate === result.nextPeriodDate) {
    //           return <div className='period-date'>{result.nextPeriod} </div>;
    //         }
    //         if (formattedDate === result.ovulationDate) {
    //           return <div className='ovulation-date'>{result.ovulationDate} </div>;
    //         }
    //         if (result.fertileWindows && result.fertileWindows.includes(formattedDate)) {
    //           return <div className='fertile-date'>{formattedDate}</div>;
    //         }
    //         return null;
    //       });
    //       return content;
    //     }
    //     return null;
    //   };

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
            
            <Calendar
                value={selectedDate}
                tileContent={tileContent}
                onChange={handleDateChange}
                
            />
        </div>
        
    );
};


export default MenstrualCycleInfo;