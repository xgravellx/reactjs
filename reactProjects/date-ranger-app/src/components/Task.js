import React, { useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker'

const Task = () => {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(12),
    });

    const handleValueChange = (newValue) => {
        console.log('new Value', newValue);
        setValue(newValue);
    }
  return (
    <div>
        <Datepicker 
            value={value}
            onChange={handleValueChange}
        />
    </div>
  )
}

export default Task