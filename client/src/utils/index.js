import moment from 'moment'


const formatDate = (Date) => {

    const formated = Date.replace(/T.*/, '').split('-').reverse().join('-')

    return formated
}

const reduceDate = (Date) => {
    const reduced = Date.split('T')[0]
    return reduced
}


const scheduleAlert = (alertType, date, km) => {

    let nextDate = new Date
    let prevDate = new Date(date)


    switch (alertType) {

        case "Oil change":
            km * 12 < 30000 ? nextDate = prevDate.setYear(prevDate.getFullYear() + 1)
                : nextDate = prevDate.setMonth(prevDate.getMonth() + (30000 / km))

            break

        case "Brake pads change":
            km * 24 < 35000 ? nextDate = prevDate.setYear(prevDate.getFullYear() + 2)
                : nextDate = prevDate.setMonth(prevDate.getMonth() + (35000 / km))
            break

        case "Lubrication":
            nextDate = prevDate.setMonth(prevDate.getMonth() + 6)
            break

        case "Technical checkup":
        case "Suspension check":
            km * 12 < 20000 ? nextDate = prevDate.setYear(prevDate.getFullYear() + 1)
                : nextDate = prevDate.setMonth(prevDate.getMonth() + (20000 / km))
            break

        case "Tire pressure check":
            nextDate = prevDate.setMonth(prevDate.getMonth() + 1)
            break

        case "Wipers change":
            nextDate = prevDate.setMonth(prevDate.getMonth() + 6)
            break

        case "Clean up":
            nextDate = prevDate.setMonth(prevDate.getMonth() + 1)
            break

        default:
            nextDate = prevDate
            break
    }


    return reduceDate(new Date(nextDate).toISOString())
}


const scheduleITV = (purchaseDate) => {

    // THE UGLIEST FUNCTION YOU GONNA SEE TODAY//

    const now = moment();
    let registerDate = moment(purchaseDate)
    let carAge = now.diff(registerDate, 'years');

    let nextITVDate = new Date()
    registerDate = new Date(purchaseDate)

    let today = new Date(reduceDate(new Date().toISOString()))

    const getCurrentYear = (dt, n) => {
        return new Date(dt.setFullYear(dt.getFullYear() + n));
    }

    if (carAge <= 6) {

        nextITVDate = getCurrentYear(registerDate, carAge).setYear(registerDate.getFullYear() + 2)
        if (nextITVDate < today.getTime()) { nextITVDate = new Date(nextITVDate).setYear(new Date(nextITVDate).getFullYear() + 2) }
    }
    else if (carAge > 6 && carAge <= 10) {

        nextITVDate = getCurrentYear(registerDate, carAge).setYear(registerDate.getFullYear() + 1)
        if (nextITVDate < today.getTime()) { nextITVDate = new Date(nextITVDate).setYear(new Date(nextITVDate).getFullYear() + 1) }
    }
    else {

        nextITVDate = getCurrentYear(registerDate, carAge).setMonth(registerDate.getMonth() + 6)
        if (nextITVDate < today.getTime()) { nextITVDate = new Date(nextITVDate).setMonth(new Date(nextITVDate).getMonth() + 6) }
    }


    return reduceDate(new Date(nextITVDate).toISOString())
}




export { formatDate, reduceDate, scheduleAlert, scheduleITV }