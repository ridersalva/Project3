import React, { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import './fullC.css'

const AllAlertCalendar = ({ events }) => {

    return (
        <div className='full'>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={events}
                eventColor='#ffffff'
            />
        </div>
    )
}

export default AllAlertCalendar