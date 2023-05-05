import React, { useState } from 'react';
import './PeriodInfo.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import format from 'date-fns/format';



const tileClassName = ({ date, view, results }) => {
    if (view === 'month') {
      const formattedDate = format(date, 'yyyy-MM-dd');
      for (var i = 0; i < results.length; i++) {
        const result = results[i];
        if (formattedDate === result.nextPeriod) {
          return 'period-date';
        } else if (formattedDate === result.ovulationDate) {
          return 'ovulation-date';
        } else if (result.fertileWindows.includes(formattedDate)) {
          return 'fertile-date';
        }
      }
      return null;
    }
  };


  const MenstrualCycleInfo = ({ results }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
    return (
      <div className='result'>
        <h3>Menstrual Cycle Information</h3>
  
        <Calendar
          value={selectedDate}
          tileClassName={({ date, view }) => tileClassName({ date, view, results })}
          onChange={handleDateChange}
        />
      </div>
    );
  };
  
  export default MenstrualCycleInfo;