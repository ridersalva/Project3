import React, { useState, useEffect } from 'react'
import moment from 'moment'
import './Calendar.css'
import build from './build'
import dayStyles from './style'

export default function Cal({ loadAlerts }) {
    const [calendar, setCalendar] = useState([])
    const [value, setValue] = useState(moment())



    useEffect(() => {
        setCalendar(build(value))
        loadAlerts(value._d)
    }, [value])

    console.log(value)


    function currMonthName() {
        return value.format("MMMM")
    }
    function currYear() {
        return value.format("YYYY")
    }
    function prevMonth() {
        return value.clone().subtract(1, "month")
    }
    function nextMonth() {
        return value.clone().add(1, "month")
    }

    return (
        <div className='calendar'>
            <div className="header">
                <div className="previous" onClick={() => setValue(prevMonth())}
                >{String.fromCharCode(171)}</div>

                <div>{currMonthName()}{currYear()}</div>

                <div className="next" onClick={() => setValue(nextMonth())}
                >{String.fromCharCode(187)}</div>
            </div>
            <div className="body">
                <div className="day-names">
                    {
                        ["s", "m", "t", "w", "t", "f", "s",].map(d => <div className="week">{d}</div>)
                    }
                </div>
                {calendar.map((week) => (
                    <div className="days">
                        {week.map((day) => (
                            <div className="day"
                                onClick={() => setValue(day)}>
                                <div className={dayStyles(day, value)}
                                >
                                    {day.format("D").toString()}</div>
                            </div>))}
                    </div>
                ))}
            </div>
        </div>
    )
}
